import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { guests } = body;

    if (!Array.isArray(guests) || guests.length === 0) {
      return NextResponse.json(
        { error: "A non-empty list of guests is required" },
        { status: 400 }
      );
    }

    const updateOperations = guests.map(
      ({ id, groupcode, rsvpstatus, email, foodpreference }) =>
        prisma.guests.update({
          where: { id, groupcode },
          data: { rsvpstatus, email, foodpreference },
        })
    );

    const updatedGuests = await prisma.$transaction(updateOperations);

    //If not all updates are applied return an error
    if (updatedGuests.length !== guests.length) {
      return NextResponse.json(
        {
          error: `Mismatch: Expected ${guests.length} updates, but only ${updatedGuests.length} were applied.`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(updatedGuests, { status: 200 });
  } catch (error) {
    console.error("Error updating guests:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
