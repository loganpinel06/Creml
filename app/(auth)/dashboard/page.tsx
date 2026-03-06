"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const Dashboard = () => {
  //create a Supabase client instance
  const supabase = createClient();
  //create a router instance for navigation
  const router = useRouter();

  //handle logout functionality
  const handleLogout = async () => {
    //sign the user out with Supabase
    const { error } = await supabase.auth.signOut();
    //handle any errors that occur during logout
    if (error) {
      alert("Logout failed: " + error.message);
      return;
    }

    //reroute to login page with a success message
    router.push("/login?message=Logged+Out+Successfully");
  };

  return (
    <div>
      <h1>Creml Dashboard</h1>
      <button onClick={handleLogout} className="cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
