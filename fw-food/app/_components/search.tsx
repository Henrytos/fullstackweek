import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Search = () => {
  return (
    <form className=" flex px-4">
      <Input
        type="text"
        className="flex-1 border-0 focus:border-0"
        placeholder="Buscar Restaurantes"
      />
      <Button className="h-10 w-10 rounded-lg bg-primary p-0">
        <SearchIcon size={20} className=" text-white" />
      </Button>
    </form>
  );
};
