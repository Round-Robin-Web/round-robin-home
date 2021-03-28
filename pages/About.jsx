import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/about.module.scss'
import Layout from '../components/layout'
import Head from 'next/head'
import Button from '../components/Button'


export default function About() {

  return(
    <Layout>
      <Head>
        <title>About page</title>
      </Head>
      <div className="position-fixed bottom-0 ms-5 position-relative">
        <Image
          priority
          src = '/images/RoundRobinPage.png'
          width={700}
          height={730}
        />  
      </div>
      <div id={Styles.about} className="position-absolute">
        <h1 id={Styles.title} className="fw-bold">Round Robinとは?</h1>
        <p id={Styles.firstDetail} className="fs-5 fw-bolder mt-5">Round Robinはエンジニアを目指す学生の共同<br />学習コミュニティです。</p>
        <p id={Styles.secondDetail} className="fs-5 fw-bolder">未経験でも自由に入ることができ、定期的に<br />もくもく会などのイベントが開かれます。</p>
        <div id={Styles.toMember}>
            <Button title="メンバーになる" path="/Member"></Button>
        </div> 
      </div>
    </Layout>
  )
}

