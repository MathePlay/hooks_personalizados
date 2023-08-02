import ContadorContext from "@/data/contexts/ContadorContext";
import Link from "next/link";
import { useContext } from "react";

export default function Contador() {
  const {numero, incrementar, decrementar} = useContext(ContadorContext)

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-3xl font-bold">{numero}</h1>
      <div className="flex gap-2">
        <button
          className=" bg-zinc-700  rounded-md h-6 w-8"
          onClick={decrementar}
        >
          -1
        </button>
        <button
          className=" bg-zinc-700  rounded-md h-6 w-8"
          onClick={incrementar}
        >
          +1
        </button>
      </div>
      <Link href="/">
        <span>Voltar</span>
      </Link>
    </div>
  );
}
