"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './Navbar.css'

import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Analytics", href: "/analytics" },
  { name: "Add Data", href: "/add-data" },
];

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div className='navbar bg-black white p-4 min-h-screen'>
        <div className="profile">
            <Image src='/bullet.png' width={100} height={100} alt="profile" />
        </div>
        <div className="navbar-welcome">
            <h2>welcome, BT23MEC013</h2>
        </div>
        <div className="navbar-elements">
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link
                    className={isActive ? "active-tab" : "non-active-tab"}
                    href={link.href}
                    key={link.name}>{link.name}</Link>
                );
            })}
        </div>
    </div>
  )
}

export default Navbar
