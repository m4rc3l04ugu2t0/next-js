"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./style.css";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const navLinks = [
        { name: "login", href: "/form/login" },
        { name: "forgot-password", href: "/form/forgot-pasword" },
        { name: "register", href: "/form/register" },
    ];

    const pathName = usePathname();

    return (
        <>
            <nav>
                {navLinks.map((link, index) => {
                    const isActive = pathName.startsWith(link.href);

                    return (
                        <Link
                            className={
                                isActive
                                    ? "font-bold mr-4"
                                    : "text-blue-500 rm-4"
                            }
                            key={index}
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
            {children}
        </>
    );
}
