import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Trade from './market/index'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    let history = useRouter();
    useEffect(()=>{
        if(location.pathname === '/'){
            history.push("/market");
        }
    },[])
  return <Trade query=''/>
}
