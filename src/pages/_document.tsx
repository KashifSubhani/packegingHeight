import Document, { Head, Html, Main, NextScript } from "next/document";

import { AppConfig } from "@/utils/AppConfig";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `function(w: Window, d, s, l, i) { w[l] = w[l] || []; w[l].push({'gtm.start':
                new Date().getTime(), event: 'gtm.js'}); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-KVSX9XLH');`,
            }}
          ></script>
         
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Packaging Height",
              "alternateName": "Packaging Height",
              "url": "https://packagingheight.com/",
              "logo": "https://packagingheight.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f04fa018.png&w=256&q=75",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1(307) 429 2922",
                "contactType": "customer service",
                "areaServed": ["US", "CA"],
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.facebook.com/packagingheight/",
                "https://www.instagram.com/packagingheightusa/",
                "https://www.linkedin.com/company/packagingheight/",
                "https://www.pinterest.co.uk/packagingheight/"
              ]
            })
          }} />

        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KVSX9XLH"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
