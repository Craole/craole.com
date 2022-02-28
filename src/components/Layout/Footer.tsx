// import Link from 'next/link';
import { Link, LinkExternal, Paths } from 'helpers';
import React from 'react';
import Styles from './styles.module.css';
import Github from 'components/Icons/Github'
import { Facebook } from 'components/Icons';

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <nav className={Styles.footer_nav_site} aria-label="primary navigation">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/portfolio">
          <a>Work</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
      <div className={Styles.footer_seperator1}></div>
      <nav className={Styles.footer_nav_social} aria-label="social media links">
        <LinkExternal
          href={Paths.external.twitter}
          title="Twitter"
          className={Styles.footerTwitter}>
          <Facebook />
        </LinkExternal>
        <Link href="https://www.github.com/craole">
          <a target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/craole/">
          <a target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
        </Link>
        <Link href="https://www.instagram.com/craole">
          <a target="_blank" rel="noreferrer noopener">
            Instagram
          </a>
        </Link>
        <Link href="https://www.facebook.com/craole">
          <a target="_blank" rel="noreferrer noopener">
            Facebook
          </a>
        </Link>
        <Link href="https://www.upwork.com/freelancers/~010cea7e6c206afee0">
          <a target="_blank" rel="noreferrer noopener">
            Upwork
          </a>
        </Link>
        <Link href="https://www.italki.com/teacher/11854417">
          <a target="_blank" rel="noreferrer noopener">
            iTalki
          </a>
        </Link>
      </nav>
      <div className={Styles.footer_seperator2}></div>
      <div className={Styles.footer_branding}>
        <Link href="/">
          <a>Craole</a>
        </Link>
        <div>
          <p>© 2022, Craole</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

// export default Footer;
