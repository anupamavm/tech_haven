import { PrismaClient } from "@prisma/client";

// Declare a global variable to hold the Prisma client instance
declare global {
	// We use var in the global declaration to ensure it is on the global object in a Node.js environment
	var prisma: PrismaClient | undefined;
}

// Initialize the Prisma client, reusing the global instance if it exists
const prismadb = globalThis.prisma || new PrismaClient();

// If in development mode, store the Prisma instance in the global object
if (process.env.NODE_ENV !== "production") {
	globalThis.prisma = prismadb;
}

export default prismadb;
