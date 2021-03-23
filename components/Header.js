import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
return(
  <header>
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
      <div className="d-flex flex-row mb-3 float-end fw-bold mt-4 pt-2 me-4">
        <Link href='/'>
          <a className="p-3">Home</a>
        </Link>
        <Link href='/about'>
          <a className="p-3">About</a>
        </Link>
        <Link href='/member'>
          <a className="p-3">Member</a>
        </Link>
        <Link href='/works'>
          <a className="p-3">Works</a>
        </Link>
        <Link href='/contects'>
          <a className="p-3">Contact</a>
        </Link>
    </div>
  </header>
)
}