import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
    return(
            <header>
                <div className= 'd-inline-flex p-2 ms-4 bd-highlight'>
                    <div>
                        <Image
                            priority
                            src = '/images/RoundLogo.png'
                            width={110}
                            height={110}
                        />
                    </div>
                    <div className='pt-4 mt-1 fs-2 fw-bold'>
                        <p>Round Robin</p>
                    </div>
                </div>
                <div className="d-flex flex-row bd-highlight mb-3 float-end fs-5 fw-bold mt-3 pt-2 me-4">
                    <Link href='/'>
                        <a className="p-4 bd-highlight text-dark">Home</a>
                    </Link>
                    <Link href='/posts/about'>
                        <a className="p-4 bd-highlight text-dark">About</a>
                    </Link>
                    <Link href='/posts/member'>
                        <a className="p-4 bd-highlight text-dark">Member</a>
                    </Link>
                    <Link href='/posts/works'>
                        <a className="p-4 bd-highlight text-dark">Works</a>
                    </Link>
                    <Link href='/posts/contects'>
                        <a className="p-4 bd-highlight text-dark">Contact</a>
                    </Link>
                </div>
            </header>
    )
}