//This layout component will wrap all routes that require authentication and check if the user is 
//logged in before allowing access to the page. 
//If the user is not logged in, they will be redirected to the sign-in page with a message 
//prompting them to sign in.
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // For all routes that require authentication we check if the user is logged in if not then we redirect
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/signin?message=Please+sign+in+to+view+this+page");

  // logic for fetching user data and passing into context for children

  return children;
}
