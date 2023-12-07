import { PrismaClient } from "@prisma/client";

// next js has hot reloading so can create multiple instances of prisma client
// hence stored in global file
const client = global.prismadb || new PrismaClient();

// not done in production
if(process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;