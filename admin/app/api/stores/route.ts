import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: NextRequest) {
	try {
		const { userId } = getAuth(req); // Get the authenticated userId

		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const body = await req.json();
		const { name } = body;

		if (!name) {
			return new NextResponse("Name is required", { status: 400 });
		}

		const store = await prismadb.store.create({
			data: {
				name,
				userId,
			},
		});

		return NextResponse.json(store);
	} catch (error) {
		console.error("[STORES_POST] Error creating store:", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
