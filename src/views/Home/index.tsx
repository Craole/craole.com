import { Layout } from 'components';
import Head from 'next/head';
import Link from 'next/link';

interface Person {
  name: string;
  hungry: boolean;
}

const me: Person = {
  name: 'Craig',
  hungry: false,
};

const Home = () => {
  return (
    <div>
      <Head>
        <title>CRAOLE | Home</title>
      </Head>
      <article>
        <h1>Home</h1>
        <Link href="https://www.w3schools.com/">
          <a>Visit W3Schools.com!</a>
        </Link>
      </article>
    </div>
  );
};

Home.getLayout = function getLayout(page: typeof Home) {
  return <Layout>{page}</Layout>;
};

export default Home;
