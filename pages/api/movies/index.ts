import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    try {
        console.log("999")

        if (req.method !== 'GET') {
          return res.status(405).end();
        }
    console.log("999")
        await serverAuth(req, res);
        console.log("2222")
        const movies = await prismadb.movie.findMany();
        console.log(movies,9999)
        return res.status(200).json(movies);
      } catch (error) {
        console.log({ error })
        return res.status(500).end();
      }
}