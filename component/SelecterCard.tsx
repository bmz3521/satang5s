import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Symbol } from '@/Models/index';

const SelecterCard = ({ item, active }: Symbol) => {
  const router = useRouter();
  const pathName = item.name.replaceAll("/", "_");
  const id = router.query.id;

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
