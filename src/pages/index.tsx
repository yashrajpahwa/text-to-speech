import React, { FC } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Head from "next/head";

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Text to Speech</title>
      </Head>
      <div className="flex flex-col">
        <div className="bg-gray-50 h-screen w-full p-2">
          <h1 className="font-bold text-4xl text-center">Text to Speech</h1>
          <p className="font-serif text-lg text-center">
            An app to help people with speech-disorder
          </p>
          <Form />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
