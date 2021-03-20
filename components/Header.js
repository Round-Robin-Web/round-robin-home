import Link from 'next/link'
import Styles from './Header.module.scss'
import utilStyles from '../Styles/utils.module.scss'
import Image from 'next/image'

export default function Header(){
    return(
            <header className={Styles.header}>
                <div className={Styles.headerLeft}>
                    <div className={Styles.headerLogo}>
                        <>
                        <Image
                            priority
                            src = '/images/RoundLogo.png'
                            className={utilStyles.image}  //仮置き
                            width={100}
                            height={100}
                        />
                        </>
                    </div>
                    <div className={Styles.headerTitle}>
                        <p>Round Robin</p>
                    </div>
                </div>
                <div className={Styles.headerRight}>
                    <Link href='/'>
                        <a className={Styles.headerToHome}>Home</a>
                    </Link>
                    <Link href='/posts/about'>
                        <a className={Styles.headerToAbout}>About</a>
                    </Link>
                    <Link href='/posts/member'>
                        <a className={Styles.headerToMember}>Member</a>
                    </Link>
                    <Link href='/posts/works'>
                        <a className={Styles.headerToWorks}>Works</a>
                    </Link>
                    <Link href='/posts/contects'>
                        <a className={Styles.headerToContacts}>Contact</a>
                    </Link>
                </div>
            </header>
    )
}