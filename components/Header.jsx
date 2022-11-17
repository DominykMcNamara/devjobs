import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/desktop/logo.svg";
import { ThemeToggler } from "./ThemeToggler";

export default function Header() {
  return (
    <div className="w-full py-[2rem] px-[1.5rem] h-[10.125rem] bg-headerImageMobile">
      <div className="flex mx-auto desktop:w-[69.375rem] mobile:p-10  desktop:pt-[2.813rem] tablet:p-[3rem] justify-between">
        <Link href="/">
          {" "}
          <Image src={Logo} alt="devjobs logo" />{" "}
        </Link>
        <ThemeToggler />
      </div>
    </div>
  );
}
