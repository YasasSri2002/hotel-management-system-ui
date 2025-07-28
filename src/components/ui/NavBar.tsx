"use client"

import Link from "next/link";

export default function NavBar(){
    return(
        <>
            <div className="flex justify-between mx-5">
                <img src="" alt="" />
                <div>
                    <ul>
                        <li>
                            <Link href={"#"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Services</Link>
                        </li>
                        <li>
                            <Link href={"#"}>About us</Link>
                        </li>
                    </ul>
                    <button>side menue</button>
                </div>
            </div>
        </>
    );
}