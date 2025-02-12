import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ✅ Arrow function that correctly parses JSON body
export const POST = async (req: Request) => {
  try {
    const body = await req.json(); // ✅ Parse request body
    const { groupcode } = body; // ✅ Extract 'groupcode' from body

    if (!groupcode) {
      return NextResponse.json(
        { error: "groupcode is required" },
        { status: 400 }
      );
    }

    const guests = await prisma.guests.findMany({
      where: { groupcode },
    });

    return NextResponse.json(guests, { status: 200 });
  } catch (error) {
    console.error("Error fetching guests:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
