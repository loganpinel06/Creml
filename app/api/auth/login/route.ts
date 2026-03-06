//backend login route to handle user authentication with Supabase Auth

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server"; // server-side client

export async function POST(req: Request) {
  try {
    //create supabase client
    const supabase = await createClient();

    //get email and password from request body
    const { email, password } = await req.json();

    //validate request body
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    //sign in user via Supabase
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    //return any errors from supabase
    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 401 });
    }
    //return a success message if login is successful
    return NextResponse.json({ message: "Login successful" });
  } catch (err) {
    console.error("Login route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
