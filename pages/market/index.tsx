import React from 'react'
import CurrencyCard from '../../component/CurrencyCard';
import SelecterCard from '../../component/SelecterCard';
import { Col, Row, Layout } from 'antd';

const { Content } = Layout;
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
      <Row className='market'>
        <Col className='selecter-container gutter'>
          {
            currency.map((item)=>(
              <SelecterCard key={item.id} item={item} active={query}/>
            ))
          }
        </Col>
        <Col className='gutter'>
          <CurrencyCard isShow={query}/>
        </Col>
      </Row>
    </section>
  )
}

export default Trade