import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const App = ({ Component, pageProps = {} }) => {
  const router = useRouter();

  useEffect(() => {
    /* reset focus to body tag every time page changes for keyboard accessibiliy. */
    const handleRefocus = () => document.body.focus();

    router.events.on('routeChangeComplete', handleRefocus);

    /* Unsubscribe from the router event on unmount */
    return () => {
      router.events.off('routeChangeComplete', handleRefocus);
    };
  }, [router]);

  const genPageClass = (path) => {
    if (path === '/') return 'page-home';

    const pathParts = path.split('/');
    pathParts.shift();
    return `page-${pathParts[0]}`;
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#0b0d17"
        />
        <meta
          name="msapplication-TileColor"
          content="#0b0d17"
        />
        <meta
          name="application-name"
          content="Space"
        />
        <meta
          name="theme-color"
          content="#ffffff"
        />
      </Head>
      <main
        id="app"
        className={`flex flex-col min-h-screen bg-indigo-900 ${genPageClass(router.pathname)}`}
      >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </main>
    </>
  );
};

App.defaultProps = {
  pageProps: {},
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};

export default App;
