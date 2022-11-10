import bg from "/public/assets/desktop/bg-pattern-header.svg";
import Image from "next/image";
import Logo from "/public/assets/desktop/logo.svg"
import { ThemeToggler } from "./ThemeToggler";

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen h-[10.125rem]"
    >
    <div className="flex mx-auto w-[69.375rem] pt-[2.813rem] justify-between">
      <Image src={Logo} alt="devjobs logo" />
      <ThemeToggler />
    </div>
    </div>
  );
}
