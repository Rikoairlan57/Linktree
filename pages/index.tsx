import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={100}
        height={100}
      />
      <h1 className="font-bold text-xl mt-4">{data.name}</h1>
    </div>
  );
}
