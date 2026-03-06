import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server"; // your server-side client

export async function POST(req: Request) {
  try {
    //create a new Supabase client for this request
    const supabase = await createClient();

    //get the email and password from the request body
    const { email, password, confirmPassword } = await req.json();

    //make sure passwords match before sending to Supabase
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 },
      );
    }

    //sign the user up with Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    //handle any errors from Supabase
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
