import React from "react";
import styled from "styled-components";
import { closeModal } from "src/reducers";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import { MOBILE_560 } from "src/common/lib/media";
import ButtonForm from "src/ui/ButtonForm";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 6px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.color.text.primary};
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.color.basic.borderModal};

  padding: 20px 60px 20px 20px;

  @media ${MOBILE_560} {
    flex-direction: column;
    font-size: 16px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 20px 20px 20px;
`;

const AlertModal: React.FC = () => {
  const dispatch = useDispatchTyped();
  const {
    lang: { alertHeart },
  } = useSelectorTyped(({ lang }) => lang);
  // const url = window.location.href;
  // const title = document.title;

  // // Добавление в избранное
  // try {
  //   if (window.external && "AddFavorite" in window.external) {
  //     // Для старого IE
  //     window.external.AddFavorite(url, title);
  //   } else if (window.sidebar && window.sidebar.addPanel) {
  //     // Для старого Firefox
  //     window.sidebar.addPanel(title, url, "");
  //   } else {
  //     alert(
  //       "Чтобы добавить страницу в избранное, нажмите Ctrl+D (или Cmd+D на Mac)"
  //     );
  //   }
  // } catch (e) {
  //   console.log("Добавление в избранное не поддерживается");
  // }
  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Wrapper>
      <Header>⭐ {alertHeart?.title}</Header>
      <Text>{alertHeart?.text},</Text>
      <Text>{alertHeart?.textSecondary}</Text>
      <ButtonWrapper>
        <ButtonForm title={alertHeart?.buttonText} handleClick={onClose} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default AlertModal;
