import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/desktop/logo.svg";
import { ThemeToggler } from "./ThemeToggler";

export default function Header() {
  return (
    <div className="w-full py-[2rem] px-[1.5rem] h-[10.125rem] bg-headerImageMobile
                    md:bg-headerImageTablet
                    lg:bg-headerImageDesktop">
      <div
        className="flex mx-auto  justify-between
                   lg: px-[8rem]
                      "
      >
        <Link href="/">
          {" "}
          <Image src={Logo} alt="devjobs logo" />{" "}
        </Link>
        <ThemeToggler />
      </div>
    </div>
  );
}
