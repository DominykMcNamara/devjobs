import Head from "next/head";

export const siteTitle = "Devjobs";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen">
      <Head>
        <link rel="icon" href="/assets/favicon-32x32.png" />
        <meta name="Devjobs" content="A job listing application" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <div>
        { children }
        </div>
      </main>
    </div>
  );
}
