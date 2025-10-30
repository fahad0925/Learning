'use client'

import Image from "next/image";
import Link from "next/link";
import Input from "./Components/Input";



import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Todos from "./Components/Todos";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div>
      {/* <div>
        <h1>hello world</h1>
        <Link href="/users">user</Link>
        <p>fdgsad</p>
        <Link href="/users/new">new</Link>
      </div>

      <div>
        <Input />
      </div> */}
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    </div>
  );
}
