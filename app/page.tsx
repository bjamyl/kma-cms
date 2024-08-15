import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen lg:grid lg:grid-cols-2">
      <div className="flex h-full flex-col gap-10 items-center justify-center">
        <h3 className="text-xl font-medium xl:text-3xl">
          KMA Sanity Admin Center
        </h3>
        <Link href="/studio">
          <Button className="rounded-none">Go to admin</Button>
        </Link>
      </div>

      <Image
        priority
        width={1280}
        height={720}
        src="/ghana.jpg"
        alt="ghana"
        className="hidden h-screen object-cover lg:block"
      />
    </main>
  );
}
