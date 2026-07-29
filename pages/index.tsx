import Head from "next/head";

import Home from "src/widgets/Home";
import { PERSON_JSON_LD } from "src/common/constants/site";

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Person + WebSite: поисковик связывает запрос «lyakoway» с человеком
            и сайтом. Только на главной — дублировать на всех страницах не
            нужно, разметка сайта описывается один раз. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </Head>
      <Home />
    </>
  );
}
