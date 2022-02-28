import { Layout } from "components";
import Head from "next/head";


const About = () => {
  return (
    <div>
      <Head>
        <title>CRAOLE | About</title>
      </Head>
      <article>
        <h1>About</h1>
      </article>
    </div>
  );
};

About.getLayout = function getLayout(page: typeof About) {
  return <Layout>{page}</Layout>;
};
export default About;
