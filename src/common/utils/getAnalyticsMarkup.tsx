import React from "react";

import { YANDEX_METRIKA_ID, GA4_MEASUREMENT_ID } from "src/common/constants/analytics";

const yandexMetrikaMarkup = () => {
  if (!YANDEX_METRIKA_ID) return null;
  const id = YANDEX_METRIKA_ID;
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(${id}, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`,
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${id}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};

const ga4Markup = () => {
  if (!GA4_MEASUREMENT_ID) return null;
  const id = GA4_MEASUREMENT_ID;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`,
        }}
      />
    </>
  );
};

const getAnalyticsMarkup = () => (
  <>
    {yandexMetrikaMarkup()}
    {ga4Markup()}
  </>
);

export default getAnalyticsMarkup;