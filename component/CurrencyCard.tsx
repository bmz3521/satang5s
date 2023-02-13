import React, { useState, useEffect } from "react";
import { Avatar, Card } from "antd";
import { connect } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';
import { priceRequest } from "../store/price/actions";
import { Currency } from 'pages/Models/index';


const { Meta } = Card;
const describe:any = {
  btc_thb : { 
    name : 'Bitcoin/Thai Bath' , 
    imageURL : "https://storage.googleapis.com/satang-pro/public/assets/icons/coins/btc.png"
  },
  busd_thb : {
    name: 'Binance USD/Thai Bath',
    imageURL : "https://seeklogo.com/images/B/binance-usd-busd-logo-A436FCF6B6-seeklogo.com.png"
  },
  usdt_thb : {
    name: 'United States Dollar Tether/Thai Bath',
    imageURL : "https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png"
  },
}

let dollarUS:any = Intl.NumberFormat('en-US');

const CurrencyCard = ({isShow}: Currency) => {
  const [coinData, setCoinData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  const [image, setImage] = useState<any>(describe.btc_thb.imageURL);
  const price = useSelector((state:any) => state.price);
  const dispatch = useDispatch();
  useEffect(()=> {
    if(price.lastPrice !== 0){
      setCoinData(price);
      setImage(describe[price?.symbol]?.imageURL)
      setLoading(false)
    }else setLoading(true)
  },[isShow , price.lastPrice])

  useEffect(()=> {
    const interval = setInterval(() => {
      dispatch(priceRequest({symbol : isShow?.toLowerCase() || 'btc_thb'}))
    }, 5000);

    return () => clearInterval(interval);
  },[isShow])

  return (
    <Card className="inner-card" loading={loading}>
    <Meta
      avatar={<Avatar src={image} />}
      title={isShow?.replace('_','/') || "BTC/THB"}
      description={describe[coinData?.symbol]?.name}
    />
    <div className={`middle-currency ${price.pending ? ' reload' : ''}`}>
      ฿ {dollarUS.format(coinData?.lastPrice || '')}
    </div>
    <div className="footer-card">Volume : {dollarUS.format(coinData?.volume)}</div>
  </Card>
  );
};


export default CurrencyCard;
