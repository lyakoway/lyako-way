import styled from "styled-components";

// Раскладка vCard: до 1250px — стек (сайдбар над контентом) + навигация
// фиксированной верхней панелью; с 1250px — две колонки (sticky-сайдбар слева
// + контент справа, навбар в углу контента). Верхний отступ на <1250px
// освобождает место под фиксированную верхнюю панель.
export const LayoutMain = styled.div`
  min-width: 259px;
  /* ≤767px — зазор от верхней навигации 18px (панель ~60px + 18);
     ≥768px — 26px (панель с подписями ~75px + 26). */
  margin: 78px 12px 40px;

  @media (min-width: 580px) {
    max-width: 520px;
    margin: 78px auto 60px;
  }

  @media (min-width: 768px) {
    max-width: 700px;
    margin-top: 101px;
  }

  @media (min-width: 1024px) {
    max-width: 950px;
  }

  @media (min-width: 1250px) {
    max-width: 1200px;
    margin: 60px auto;
    display: flex;
    justify-content: center;
    /* сайдбар не тянется на всю высоту контента — берёт свою высоту (sticky),
       а минимальную высоту ему задаёт SidebarWrapper (= высоте блока «Дом»). */
    align-items: flex-start;
    gap: 25px;
  }
`;

export const MainContent = styled.div`
  position: relative;

  @media (min-width: 1250px) {
    min-width: 75%;
    width: 75%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  @media (min-width: 1250px) {
    /* тянем контент на всю высоту колонки (= высоте сайдбара) */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
