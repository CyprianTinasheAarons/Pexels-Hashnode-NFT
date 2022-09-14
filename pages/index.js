import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mint from "../components/Mint";
import "animate.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pexel NFT Dapp</title>
        <meta name="description" content="Pexel NFT Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Mint />
        <Footer />
      </div>
    </div>
  );
}
