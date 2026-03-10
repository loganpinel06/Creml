//backend route to GET, UPDATE, and DELETE a specific user by id
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

//GET user by id FROM OUR TABLE
//THIS IS DIFFERENT FROM SUPABASE AUTH USER ENDPOINT - THIS GETS THE USER DATA WE STORE IN OUR OWN TABLE, NOT THE AUTHENTICATION DATA IN SUPABASE
export async function GET(
  request: Request,
  //params is a promise that resolves to an object containing the id parameter from the URL
  //so it needs to be awaited to get the actual id value to query the database with
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const user = await prisma.users.findUnique({
    where: { uid: id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
