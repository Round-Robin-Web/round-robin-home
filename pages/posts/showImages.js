import Image from 'next/image'
import Layout from '../../components/layout';

function Home() {
  return (
    <Layout>
      <h1>My Homepage</h1>
      <Image
        src="/images/profile.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </Layout>
  )
}

export default Home