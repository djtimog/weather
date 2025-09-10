import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import UnitSelector from "./UnitSelector";
import Link from "next/link";

export default function Header() {
  return (
    <div className="mb-6 flex items-center justify-between shadow-2xl p-3 container mx-auto">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src={"/logo.png"}
          alt={"Weather Logo"}
          width={100}
          height={100}
          className="size-11 object-contain"
        />
        <p className="text-md font-bold">Weather App</p>
      </Link>

      <div className="flex items-center gap-4 flex-wrap">
        <UnitSelector />
        <ModeToggle />
      </div>
    </div>
  );
}
