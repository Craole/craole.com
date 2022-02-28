import { Layout } from "components";
import Head from "next/head";


const Contact = () => {
  return (
    <div>
      <Head>
        <title>CRAOLE | Contact</title>
      </Head>
      <article>
        <h1>Contact</h1>
      </article>
    </div>
  );
};

Contact.getLayout = function getLayout(page: typeof Contact) {
  return <Layout>{page}</Layout>;
};

export default Contact;
