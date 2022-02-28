import { PageProps } from 'interfaces';
import React from 'react';
import Styles from './styles.module.css';

export default function Main({ children }: PageProps) {
  return (
    <>
      <main className={Styles.main}>{children}</main>
    </>
  );
}
