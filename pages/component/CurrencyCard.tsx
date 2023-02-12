import React, { useState, useEffect } from "react";
import { Avatar, Card } from "antd";
import { getPrice } from '../store/price/saga';
import { connect } from 'react-redux';

interface Props {
  isShow : string;
}

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

const CurrencyCard = ({isShow}: Props) => {
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState<any>(null);

  useEffect(()=> {
    setLoading(true)
    initialFunc();
  },[isShow])
  
  useEffect(()=> {
    const interval = setInterval(() => {
      setLoading(true)
      initialFunc();
    }, 5000);

    return () => clearInterval(interval);
  },[isShow])


  const initialFunc = async () => {
    const data = await getPrice({symbol : isShow});
    setCoinData(data)
    setLoading(false) 
  };
  return (
    <Card className="inner-card">
    <Meta
      avatar={<Avatar src={describe[coinData?.symbol]?.imageURL} />}
      title={isShow?.replace('_','/') || "BTC/THB"}
      description={describe[coinData?.symbol]?.name}
    />
    <div className={`middle-currency ${loading ? ' reload' : ''}`}>
      ฿ {dollarUS.format(coinData?.lastPrice)}
    </div>
    <div className="footer-card">Volume : {dollarUS.format(coinData?.volume)}</div>
  </Card>
  );
};

const mapDispatchToProps = (dispatch:any) => ({
  getPrice:( params:any ) => dispatch(getPrice(params))
})

export default connect(null, mapDispatchToProps)(CurrencyCard);
