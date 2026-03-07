//handle all database interactions related to users here
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.users.findMany();
  return NextResponse.json(users);
}

//POST ROUTE IS IN /api/auth/register/route.ts since it also handles authentication logic with Supabase
//makes for cleaner separation of concerns so frontend doesnt make 2 API calls
