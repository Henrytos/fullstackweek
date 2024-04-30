import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-white px-5 ">
        <Image
          className=""
          src="/logtipo.png"
          alt="logotipo"
          width={100}
          height={30}
        />
        <Button className="border-0 bg-transparent p-1">
          <Menu size={24} className="text-zinc-900" />
        </Button>
      </header>
    </>
  );
};
