import Family from "components/Family";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

/* View страницы Liao */
const Liao: NextPage = () => {
  const [shuffleList, setShuffleList] = useState<number[]>([]);
  const max = 25;
  useEffect(() => {
    const list = Array.from(new Array(max + 1).keys());
    setShuffleList(list.reverse());
  }, []);
  return (
    <>
      <Head>
        <title>廖 - RayLiao</title>
      </Head>
      <Family data={shuffleList} path="family" />
    </>
  );
};

export default Liao;
