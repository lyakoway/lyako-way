import styled from "styled-components";

// Раскладка vCard: до 1250px — стек (сайдбар над контентом),
// с 1250px — две колонки (sticky-сайдбар слева + контент справа).
// Нижние отступы на мобайле оставляют место фиксированному навбару.
export const LayoutMain = styled.div`
  min-width: 259px;
  margin: 15px 12px 75px;

  @media (min-width: 580px) {
    max-width: 520px;
    margin: 60px auto 100px;
  }

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    max-width: 950px;
    margin-bottom: 60px;
  }

  @media (min-width: 1250px) {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: stretch;
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
