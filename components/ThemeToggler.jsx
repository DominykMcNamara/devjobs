import { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import sunIcon from "/public/assets/desktop/icon-sun.svg";
import moonIcon from "/public/assets/desktop/icon-moon.svg";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme('light');
 
  const toggleTheme = () => {
    if (theme !=='dark') {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="flex flex-row desktop:w-[7rem] justify-between align-center p-2">
      <Image
        src={sunIcon}
        alt="Icon in the shape of a sun"
        height={25}
        width={25}
        className="mr-1"
      />
      <div className="w-[3rem] h-[1.5rem] bg-secondary-white rounded-[0.75rem] p-1 flex align-center">
        <button
          onClick={toggleTheme}
          className={`cursor-pointer rounded-full bg-[#5964E0] ${
            theme === 'dark' ? "translate-x-5" : "-translate-x-0"
          }  h-[0.875rem] transition-all duration-75 w-[0.875rem]`}
        ></button>
      </div>
      <Image
        src={moonIcon}
        alt="Icon in the shape of a moon"
        height={25}
        width={25}
        className="ml-1"
      />
    </div>
  );
}
