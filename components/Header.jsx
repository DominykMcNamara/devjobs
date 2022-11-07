import bg from "../assets/desktop/bg-pattern-header.svg";
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
    <div className="flex mx-auto w-[77.813rem] pt-[2.813rem] justify-around">
      <h1 className="text-h1 text-secondary-white"> devjobs </h1>
      <ThemeToggler />
    </div>
    </div>
  );
}
