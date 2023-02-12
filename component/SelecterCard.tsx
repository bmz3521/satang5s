import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

type Props = {};

interface Currency {
  item: item;
  active: string;
}
interface item {
  id: number;
  name: string;
}
const SelecterCard = ({ item, active }: Currency) => {
  const router = useRouter();
  const pathName = item.name.replaceAll("/", "_")
  const id = router.query.id

  return (
    <Link
      href={"/market/" + pathName}
      className={`selecter-card ${id == pathName ? "active" : ""}`}
    >
      {item.name}
    </Link>
  );
};

export default SelecterCard;
