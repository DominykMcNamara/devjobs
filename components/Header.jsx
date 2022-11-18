import Link from "next/link";
import Image from "next/image";
import Logo from "/public/assets/desktop/logo.svg";
import { ThemeToggler } from "./ThemeToggler";

export default function Header() {
  return (
    <div className="w-full py-[2rem] px-[1.5rem] h-[10.125rem] bg-headerImageMobile
                    md:bg-headerImageTablet md:bg-cover md:bg-center md:bg-no-repeat
                    lg:bg-headerImageDesktop lg:bg-cover lg:bg-center lg:bg-no-repeat
                    xl:mx-auto xl:px-[0rem]
                    ">
      <div
        className="flex mx-auto  justify-between
                   lg:px-[8rem]
                   xl:px-[10rem] xl:-mx-[24rem]  
                   2xl:justify-around 2xl:px-[37rem]"
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
