"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const pathname = usePathname();

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSingOut= async()=> {
    await authClient.signOut()
  }
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
              href="/profile"
              className={
                pathname === "/profile" ? "text-blue-500 underline" : ""
              }
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div>
      {!user && (
        <div className="flex gap-3 items-center">
          <Link href={"/singup"}>
            <Button variant="outline">SingUp</Button>
          </Link>
          <Link href={"/singin"}>
            <Button variant="outline">SingIn</Button>
          </Link>
        </div>
      )}
      {
        user && <div className="flex gap-3">
          <Avatar size="xl">
        <Avatar.Image alt="John Doe" src={user?.image} />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar>
      <Button onClick={handleSingOut} size="sm" variant="danger">SingOut</Button>
        </div>
      }
      </div>
    </div>
  );
};

export default Navbar;
