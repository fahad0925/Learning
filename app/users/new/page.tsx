"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>page 2</h1>
      <button onClick={() => router.push("/")}>back</button>
    </div>
  );
};

export default page;
