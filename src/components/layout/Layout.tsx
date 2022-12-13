import React from 'react';
import MainNavigation from '@/components/layout/MainNavigation';
import styles from '@/styles/Layout.module.css'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
