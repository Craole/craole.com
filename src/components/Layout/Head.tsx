// import {Meta} from "interfaces/Page/Meta";
import { Paths } from 'helpers';
import { useCurrentPath } from 'hooks';
import { PageProps } from 'interfaces';
import NextHead from 'next/head';
import React from 'react';
4;

export default function Head({ meta }: PageProps) {
  const title = meta ? meta.title : 'Craole';
  const url = Paths.url + useCurrentPath();

  return (
    <NextHead>
      <meta charSet="UTF-8" />

      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="icon" href="/favicon.ico" />

      {meta && meta.description && (
        <>
          <meta name="description" content={meta.description} />
          <meta property="og:description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
          <meta property="og:keywords" content={meta.keywords} />
        </>
      )}

      <meta property="og:url" content={url} />
      <meta name="twitter:site" content={url} />

      {meta && meta.image && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={meta.image} />
          <meta property="og:image" content={meta.image} />
        </>
      )}

      <meta property="og:site_name" content="Craole" />
      <meta property="og:type" content="Portfolio Website" />
      <meta
        property="copyright"
        content={`(c) ${new Date().getFullYear()} Copyright: Craole`}
      />
    </NextHead>
  );
}
