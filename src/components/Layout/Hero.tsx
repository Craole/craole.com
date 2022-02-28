// import Link from "next/link";
// import { Link } from "helpers";
// import { LinkExternal } from "helpers";
// import { PageProps } from 'interfaces';
import heroImage from 'assets/Image/siteBG.jpg';
import Image from 'next/image';
import React from 'react';
import Styles from './styles.module.css';

interface HeroImage {
  props: {
    className?: string;
    alt?: string;
    src: string;
    layout?: string;
    objectFit?: string;
  };
}

export default function Hero() {
  return (
    <>
      <div className={Styles.page_overlay}></div>
      <Image
        className={Styles.page_background}
        alt="page background"
        src={heroImage}
        layout="fill"
        objectFit="cover"
      />
    </>
  );
}
