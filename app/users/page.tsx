import Link from "next/link";
import UserTable from "./UserTable";
interface Props {
  searchParams: { sortOrder: string };
}
export default function page({ searchParams: { sortOrder } }: Props) {
  return (
    <>
      <UserTable sortOrder={sortOrder} />
      <Link href={"/users/new"}>newusers </Link>
    </>
  );
}
