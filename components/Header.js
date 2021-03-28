import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
return(
  <header　id="header" className="position-fixed w-100">
    <div className= 'd-inline-flex p-2 ms-4'>
      <Image
        priority
        src = '/images/RoundLogo.png'
        width={110}
        height={110}
      />
      <h3 className='pt-4 mt-2 fs-2 fw-bold'>
        Round Robin
      </h3>
      </div>
      <div className="d-flex mb-3 float-end fw-bold mt-4 pt-2 me-4">
        <Link href='/'>
          <a className="p-3 mt-1">Home</a>
        </Link>
        <Link href='/About'>
          <a className="p-3 mt-1">About</a>
        </Link>
        <Link href='/Member'>
          <a className="p-3 mt-1">Member</a>
        </Link>
        <Link href='/Works'>
          <a className="p-3 mt-1">Works</a>
        </Link>
        <Link href='/Contects'>
          <a className="p-3 mt-1">Contact</a>
        </Link>
    </div>
  </header>
)
}