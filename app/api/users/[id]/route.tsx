import { useParams } from "next/navigation";
import { NextResponse } from "next/server";

let { id }: any = useParams();

export function GET(request: NextResponse) {
  if (id > 10) return NextResponse.json({ error: "user not found" });

  return NextResponse.json([{ id: 1, name: "asim muneer" }]);
}
