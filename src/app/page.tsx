"use client"

import Login from "./(landingPage)/login/Login";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="justify-center">
        <div>
          <Link href='/dashboard'><h3 className="bg-red-700 flex items-center justify-center">Login</h3></Link>
        </div>
        <h1>this is a attendance Website</h1>
      </div>
    </>
  );
}