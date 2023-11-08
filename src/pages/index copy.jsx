import * as React from "react";
import CharacterImage from "../components/CharacterImage";
import BottomNav from "../components/BottomNav";
import Cigarettes from "../components/Cigarettes";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const IndexPage = () => {
  return (
    <main>
      {/* 画像を中央に配置 */}
      {/* <CharacterImage /> */}
      <Cigarettes />
      <BottomNav />
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>たばこ</title>
    <meta name="description" content="たばこ" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    {/* Open Graph / Facebook */}
    <meta property="og:title" content="たばこ" />
    <meta property="og:description" content="たばこ" />
    <meta property="og:image" content="https://riotamoriya.github.io/inumakirulet/inumaki.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://riotamoriya.github.io/inumakirulet/" />
    {/* Twitter */}
    <meta name="twitter:card" content="たばこ" />
    <meta name="twitter:title" content="たばこ" />
    <meta name="twitter:description" content="たばこ" />
    <meta name="twitter:image" content="https://riotamoriya.github.io/inumakirulet/inumaki.jpg" />
  </>
);