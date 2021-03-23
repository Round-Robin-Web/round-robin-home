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
      
      
      {/* <div 　="accordion" id="accordionExample">
        <div 　="accordion-item">
          <h2 　="accordion-header" id="headingOne">
            <button 　="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" 　="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div 　="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div 　="accordion-item">
          <h2 　="accordion-header" id="headingTwo">
            <button 　="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" 　="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div 　="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div 　="accordion-item">
          <h2 　="accordion-header" id="headingThree">
            <button 　="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" 　="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div 　="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}
