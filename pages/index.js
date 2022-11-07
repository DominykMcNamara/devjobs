import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import HeaderBackgroundImage from '../assets/desktop/bg-pattern-header.svg'

export default function Home() {
  return (
    <Layout>
      <>
      <h1 className="text-h1">Hello world</h1>
      </>
    </Layout>
  )
}
