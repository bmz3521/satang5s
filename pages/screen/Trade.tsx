import React from 'react'
import CurrencyCard from '../component/CurrencyCard';
import SelecterCard from '../component/SelecterCard';
interface Props {
  query : string;
}

const Trade = ({query}: Props) => {
  const currency = [
    { id : 0 , name : 'BTC/THB'},
    { id : 1 , name : 'BUSD/THB'},
    { id : 2 , name : 'USDT/THB'}
  ]
  return (
    <section className="container-trade">
      <div className='market'>
        <div className='selecter-container'>
          {
            currency.map((item)=>(
              <SelecterCard key={item.id} item={item} active={query}/>
            ))
          }
        </div>
        <CurrencyCard isShow={query}/>
      </div>
    </section>
  )
}

export default Trade