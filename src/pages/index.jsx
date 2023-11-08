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
      {/* <Cigarettes /> */}
      <div className="layout-container">
        <div className="header">
          <div className="quantity">
            20本入
          </div>
          <div className="title-subtitle">
            <div className="title">ハイライト</div>
            <div className="subtitle">JT(日本たばこ産業株式会社)</div>
          </div>
        </div>
        <div className="main-content">メインコンテンツ</div>
        <div className="sidebar">
          <div className="type">紙巻</div>
          <div className="description">
            ◾️タール：17mg <br/>
            ◾️ニコチン：1.4mg
          </div>
          <div className="url">https://www.tabako-sakuranbo.co.jp/img/tabakogoods/l-1027.jpg</div>
        </div>
        <div className="footer">
          <div className="price">¥520</div>
          <div className="barCode">紙巻</div>
        </div>
        <div className="footer-nav">フッターナビ</div>
      </div>

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