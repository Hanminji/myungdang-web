import { Header, Tab, Near, Rank } from "./components";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Loading from "./components/Loading";

import "./assets/css/App.css";

function App() {
  const [tabName, setTabName] = useState("rank");
  const [loading, setLoading] = useState(null);

  const changeTab = (tabName) => {
    setTabName(tabName);
  };

  const title = "명당";
  const author = "mj";
  const description =
    "전국 1등 명당은 어디? 내 주변 명당은 어디? 로또 명당을 찾는 가장 좋은 방법.";
  const ogImagePath = "https://myungdang.live/og_image.jpeg";

  return (
    <div>
      <Helmet>
        <html lang="ko" amp />
        <meta charSet="utf-8" />
        <title itemProp="name" lang="ko">
          {title}
        </title>
        <meta
          name="naver-site-verification"
          content="0a0e48882b4bd8648836babd74ad4d6d2ebc7022"
        />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="로또,로또 매장,로또 판매점,복권,로또 편의점,로또 검색,로또 등수,로또 찾기"
        />
        {/* Open graph */}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={ogImagePath} />
        <meta property="og:url" content="http://myungdang.live" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImagePath} />
        <link rel="canonical" href="http://myungdang.live" />
      </Helmet>
      {loading ? <Loading /> : <div />}
      <div>
        <Header />
        <Tab changeTab={changeTab} tabName={tabName} />
      </div>
      {tabName === "rank" ? (
        <Rank setLoading={setLoading} />
      ) : (
        <Near setLoading={setLoading} />
      )}
    </div>
  );
}

export default App;
