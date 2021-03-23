import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/index.module.scss'


export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return {
    props : {
      allPostsData
    }
  }
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <div className="float-end me-5 position-fixed top-0 end-0 mt-4 position-relative">
          <Image
            priority
            src = '/images/homePage.png'
            className="float-end"
            width={950}
            height={800}
          />
        </div>
        <div id={Styles.mainPassage} className="mt-5">
          <p className={Styles.fontAdjust}>Live Freely</p>
          <p className={Styles.fontAdjust}>Grow Up With Friends!!</p>
          <p id={Styles.subPassage} className="fs-6 fw-bolder">-駆け出しエンジニアの共同コミュニティ-</p>
          <Link href="#">
            <a className={Styles.greenButton}>メンバーになる</a>
          </Link>
          <Link href="#">
            <a className={Styles.blueButton}>詳しくみる</a>
          </Link> 
        </div>
      </div>
    </Layout>
  )
}
