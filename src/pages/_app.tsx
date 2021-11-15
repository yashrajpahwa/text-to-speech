import type { AppProps } from "next/app";
import { FC, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [canRun, setCanRun] = useState(true);
  useEffect(() => {
    if ("speechSynthesis" in window) {
      setCanRun(true);
    } else {
      setCanRun(false);
    }
  }, []);
  return <>{canRun && <Component {...pageProps} />}</>;
};

export default App;
