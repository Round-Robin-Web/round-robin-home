import Link from 'next/link'
import Styles from './Header.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Image from 'next/image'

export default function Header(){
    return(
            <header>
                <div className='header-left'>
                    <div className='header-logo'>
                        <>
                        <Image
                            priority
                            src = '/images/RoundLogo.png'
                            className={utilStyles.image}  //仮置き
                            width={70}
                            height={70}
                        />
                        </>
                    </div>
                    <div className='header-title'>
                        <h2>Round Robin</h2>
                    </div>
                </div>
                <div className='header-right'>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Link href='/posts/about'>
                        <a>About</a>
                    </Link>
                    <Link href='/posts/works'>
                        <a>Works</a>
                    </Link>
                    <Link href='/posts/contects'>
                        <a>Contacts</a>
                    </Link>
                </div>
            </header>
    )
}