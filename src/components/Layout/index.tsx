// import { useCurrentPath } from 'hooks';
import { PageProps } from 'interfaces';
import React from 'react';
import Footer from './Footer';
import Head from './Head';
import Hero from './Hero';
import Styles from './styles.module.css';

export default function Layout({ children, meta }: PageProps) {
  return (
    <div className={Styles.page}>
      <Head meta={meta} />
      <Hero />
      <main className={Styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

// function NavLink({ label, href }: { label: string; href: string }) {
//   const currentPath = useCurrentPath();

//   return (
//     <Link
//       href={href}
//       className={classNames({
//         [Styles.active]: currentPath === href,
//       })}>
//       {label}
//     </Link>
//   );
// }
