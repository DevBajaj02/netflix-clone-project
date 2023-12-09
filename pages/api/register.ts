import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler( req: NextApiRequest, res: NextApiResponse){
    
    try {
        console.log("hi2233");

        if(req.method !== 'POST') {
            return res.status(405).end();
        }
        const { email, name, password } =req.body;
        const existingUser = await prismadb.user.findUnique({
            where: {
                email,
            }
        });

        if(existingUser){
            return res.status(422).json({error: 'Email taken' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        // @param saltOrRounds
        // The salt to be used in encryption. 
        // If specified as a number then a salt will be generated with the specified number of rounds and used.

        const user=await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        });

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        console.log("hi22");

        return res.status(400).end();
    }
}