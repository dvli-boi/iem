import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import HeaderTwo from "@/components/HeaderTwo";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Service from "@/components/Service";
import AboutUs from "@/components/Aboutus";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const MapWithNoSSR = dynamic(
    () =>
      import("../components/Map").then((Mod) => {
        return Mod.default;
      }),
    {
      loading: () => "Loading...",
      ssr: false,
    }
  );

  return (
    <>
      <Head>
        <title>
          IEM,l'installation et la maintenance des équipements électriques
        </title>
        <meta
          name="description"
          content=" IEM est une entreprise spécialisée dans la conception, la réalisation,
          l'installation et la maintenance des équipements électriques,
          électroniques, mécaniques et hydrauliques.
"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />
      <HeaderTwo />
      <Banner />

      <AboutUs />
      <Service />
      <Services />

      <section className="map-contact-us">
        <MapWithNoSSR />
        <ContactUs />
      </section>
      <Footer />
    </>
  );
}
