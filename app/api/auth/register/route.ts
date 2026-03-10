//backend register route to handle user signups with Supabase Auth

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server"; //server-side client
import { prisma } from "@/lib/prisma"; //Prisma client

export async function POST(req: Request) {
  try {
    //create a new Supabase client for this request
    const supabase = await createClient();

    //get the email and password from the request body
    const { email, password, firstName, lastName, role } = await req.json();

    //sign the user up with Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    //handle any errors from Supabase
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    //check if user data was not returned
    if (!data.user) {
      return NextResponse.json(
        { error: "User creation failed" },
        { status: 400 },
      );
    }
    //get the created user id
    const userId = data.user.id;

    //create the user in the database with
    const user = await prisma.users.create({
      data: {
        uid: userId,
        email,
        name: `${firstName} ${lastName}`,
        role: role,
      },
    });
    //return a success message
    return NextResponse.json({ message: "Signup successful", user });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
