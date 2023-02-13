import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { priceRequest } from "../store/price/actions";
import { Symbol } from 'pages/Models/index';

const SelecterCard = ({ item, active }: Symbol) => {
  const router = useRouter();
  const pathName = item.name.replaceAll("/", "_");
  const id = router.query.id;
  const symbol = id ? pathName.toLowerCase() : "btc_thb"
  const dispatch = useDispatch();

  const onFetchPrice = () => {
    dispatch(priceRequest({symbol : symbol}))
  }
    
  useEffect(()=> {
      onFetchPrice()
  },[])

  return (
    <Link
      href={"/market/" + pathName}
      className={`selecter-card ${id == pathName ? "active" : ""}`}
      onClick={()=> onFetchPrice() }
    >
      {item.name}
    </Link>
  );
};

export default SelecterCard;
