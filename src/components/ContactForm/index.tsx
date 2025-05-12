import { FC, useCallback, useState } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";

import { Form, Header, Content, Footer } from "./style";
import { closeModal } from "src/reducers";
import ButtonForm from "src/ui/ButtonForm";
import { wait } from "src/common/utils/wait";

const ContactForm: FC = () => {
  const {
    lang: { modal },
  } = useSelectorTyped(({ lang }) => lang);
  const dispatch = useDispatchTyped();
  const [statusRequest, setStatusRequest] = useState<
    "success" | "error" | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCloseButton = useCallback(async () => {
    setLoading(true);
    await wait(3000);
    setLoading(false);
    setStatusRequest("success");
    await wait(2000);
    // if (statusRequest === "success") {
    dispatch(closeModal());
    // }
  }, [dispatch, statusRequest, wait, setStatusRequest, setLoading]);

  return (
    <Form>
      <Header>{modal.title}</Header>
      <Content>111</Content>
      <Footer>
        <ButtonForm
          title={modal.buttonText}
          handleClick={handleCloseButton}
          loading={loading}
          status={statusRequest}
        />
      </Footer>
    </Form>
  );
};

export default ContactForm;
