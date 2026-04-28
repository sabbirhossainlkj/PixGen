'use client'
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="border p-3 flex justify-between items-center shadow-2xl">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" height={40} width={40}></Image>
        <p className="font-bold text-xl">PixGen</p>
      </div>
      <div>
        <ul className="font-bold text-xl flex items-center gap-5">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "text-blue-500 underline" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/AllPhotos"
              className={
                pathname === "/AllPhotos" ? "text-blue-500 underline" : ""
              }
            >
              All Photos
            </Link>
          </li>

          <li>
            <Link
              href="/Profile"
              className={
                pathname === "/Profile" ? "text-blue-500 underline" : ""
              }
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        <Button variant="outline">SingIn</Button> <br />
        <Button variant="outline">SingUp</Button>
      </div>
    </div>
  );
};

export default Navbar;
