import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";

const name = "suzukalight";
export const siteTitle = "Next.js Sample Website";

type LayoutProps = {
  home?: boolean;
};

const Layout: FC<LayoutProps> = ({ children, home }) => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <header>
      {home ? (
        <>
          <img src="/icon-192x192.png" alt={name} />
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <img src="/icon-192x192.png" alt={name} />
            </a>
          </Link>
          <h2>
            <Link href="/">
              <a>{name}</a>
            </Link>
          </h2>
        </>
      )}
    </header>

    <main>{children}</main>

    {!home && (
      <div>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
);

export default Layout;
