'use client'

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="pt-60">
      <h1 className="flex justify-center">Home Page</h1>
      <div className="flex justify-center">
        <Button onClick={() => router.push('/')}>Sign Out</Button>
      </div>
    </div>
  );
}

export default HomePage;