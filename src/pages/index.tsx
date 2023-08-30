import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [rotate, setRotate] = useState("45");
  return (
    <div
      className={`flex min-h-screen bg-[#ffff] dark flex-col justify-between p-1 ${inter.className}`}
    >
      <Head>
        <title>Sanusi Personal Website</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Anwar sanusi" />
        <meta
          name="description"
          content="This is Sanusi Personal Website to describe who is sanusi"
        />
      </Head>
      <div>
        <div>
          <motion.div
            className=" w-16 h-16 ml-6 bg-red-500 px-6 drop-shadow-2xl"
            animate={{ x: Number(x), y: Number(y), rotate: Number(rotate) }}
          >
            ini box
          </motion.div>
        </div>
        <div className="inputs">
          <input
            type="range"
            max={360}
            min={0}
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
          <input
            type="range"
            max={360}
            min={0}
            value={y}
            onChange={(e) => setY(e.target.value)}
          />
          <input
            type="range"
            max={360}
            min={0}
            value={rotate}
            onChange={(e) => setRotate(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
