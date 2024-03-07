import "../styles/global.css";

import type { AppProps } from "next/app";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    {/* Same as */}
    <ToastContainer />
    <Component {...pageProps} />
    <FloatingWhatsApp
      phoneNumber="+923074292922"
      accountName="Team"
      notification={false}
      buttonClassName="left-10"
      chatboxClassName="left-10"
      allowClickAway
    />
  </>
);

export default MyApp;
