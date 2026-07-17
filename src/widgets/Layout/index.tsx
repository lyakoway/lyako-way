import React, { FC, ReactNode } from "react";

import Sidebar from "src/components/Sidebar";
import Navbar from "src/components/Navbar";
import { useAutoLocaleClimate } from "src/features/customHooks";

import { LayoutMain, MainContent, Content } from "./style";

// Оболочка vCard: сайдбар-визитка + область контента с навбаром.
// Оборачивает все страницы (подключается в pages/_app.tsx).
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  // Сайд-эффекты, ранее жившие в hero: гео→язык, погода→климат, лайки.
  useAutoLocaleClimate();

  return (
    <LayoutMain>
      <Sidebar />
      <MainContent>
        <Navbar />
        <Content>{children}</Content>
      </MainContent>
    </LayoutMain>
  );
};

export default Layout;
