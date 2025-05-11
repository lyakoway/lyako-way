import { FC, useCallback } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";

import { Form, Header, Content, Footer } from "./style";
import { closeModal } from "src/reducers";
import ButtonForm from "src/ui/ButtonForm";

const ContactForm: FC = () => {
  const {
    lang: { modal },
  } = useSelectorTyped(({ lang }) => lang);
  const dispatch = useDispatchTyped();

  const handleCloseButton = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <Form>
      <Header>{modal.title}</Header>
      <Content>111</Content>
      <Footer>
        <ButtonForm title={modal.buttonText} handleClick={handleCloseButton} />
      </Footer>
    </Form>
  );
};

export default ContactForm;
