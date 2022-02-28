import { Layout } from "components";
import Head from "next/head";

export default function Page() {
  return (
    <div>
        <h1>Portfolio</h1>
    </div>
  );
};

Page.getLayout = function getLayout(page: typeof Page) {
  return <Layout>{page}</Layout>;
};
// export default Page;


Page.meta = {
  title: "Portfolio",
  description: "Projects various blah.",
  // image: paths.image.cover,
};