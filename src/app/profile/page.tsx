import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        absolute: "absolute",
    },
};

export default function Profile() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                </ul>
            </nav>
            <h1>Profile</h1>
        </>
    );
}
