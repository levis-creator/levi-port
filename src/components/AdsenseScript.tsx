import Script from "next/script";
import { FC } from "react";

interface AdsenseScriptProps {
  pid: string;
}
const AdsenseScript: FC<AdsenseScriptProps> = ({ pid }) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pid}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default AdsenseScript;
