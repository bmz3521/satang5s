import React, { useState, useEffect, useCallback } from "react";
import { Avatar, Card } from "antd";
import { Currency } from '@/Models/index';
import { useRouter } from "next/router";

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
  const [ws, setWs] = useState<any>(null);
  const router = useRouter();
  const id = router.query?.id?.toString().replaceAll("/", "_");
  const symbol = id ? id.toLowerCase() : "btc_thb"
  const [coinData, setCoinData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(true);
  const [image, setImage] = useState<any>(describe.btc_thb.imageURL);
  const URL_WEB_SOCKET = 'wss://ws.satangcorp.com/ws/!miniTicker@arr';


  useEffect(() => {
    setLoading(true)
    const wsClient:any = new WebSocket(URL_WEB_SOCKET);
    wsClient.onopen = (event:any) => {
      setWs(wsClient);
    };
    wsClient.onclose = () => { setRefresh(false)};
    return () => {
      wsClient.close();
    };
  }, [symbol]);

  useEffect(() => {
    if (ws) {
      ws.onmessage = (evt:any) => {
        
        const trade = JSON.parse(evt.data);
        const filterPrice = trade?.filter((item:any) => item.s === symbol )[0]
        if(coinData?.lastPrice !== filterPrice.c) {
          setRefresh(true)
        }
        setCoinData({
          lastPrice : filterPrice.c,
          symbol : filterPrice.s,
          volume : filterPrice.q
        })
        setImage(describe[filterPrice.s]?.imageURL)
        setLoading(false)
        setTimeout(()=> setRefresh(false),500)
      };
    }
  }, [ws,symbol,coinData]);

  return (
    <Card className="inner-card" loading={loading}>
    <Meta
      avatar={<Avatar src={image} />}
      title={isShow?.replace('_','/') || "BTC/THB"}
      description={describe[coinData?.symbol]?.name}
    />
    <div className={`middle-currency ${refresh ? ' reload' : ''}`}>
      ฿ {dollarUS.format(coinData?.lastPrice || '')}
    </div>
    <div className="footer-card">Volume : {dollarUS.format(coinData?.volume)}</div>
  </Card>
  );
};


export default CurrencyCard;
