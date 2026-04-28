import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Button } from "@heroui/react";
const Navbar = () => {
  return (
    <div className="border p-2 flex justify-between items-center shadow-2xl">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" height={40} width={40}></Image>
        <p className="font-bold text-xl">PixGen</p>
      </div>
      <div>
        <ul className="font-bold text-xl flex items-center gap-3">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>All Photos</Link>
          </li>
          <li>
            <Link href={'/'}>Profile</Link>
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
