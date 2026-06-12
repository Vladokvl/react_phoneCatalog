import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Breadcrumbs from '../Breadcrumbs';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Store a general "prevPage" for non-product pages (used by cart back button)
    if (
      location.pathname !== '/cart' &&
      !location.pathname.startsWith('/product')
    ) {
      sessionStorage.setItem('prevPage', location.pathname);
    }

    // If we're on a products listing page, remember the full listing URL (including search)
    if (location.pathname.startsWith('/products')) {
      sessionStorage.setItem(
        'productsListingPrev',
        `${location.pathname}${location.search}`,
      );
    }
  }, [location]);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.breadcrumbsContainer}>
        <Breadcrumbs />
      </div>
      <main className={styles.layout__content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
