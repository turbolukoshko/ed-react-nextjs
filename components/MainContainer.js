import Head from 'next/head';
import A from './A';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={`turbolukoshko, nextjs ${keywords}`}></meta>
        <title>Homepage</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Home page" />
        <A href="/users" text="Users" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: #1e90ff;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
