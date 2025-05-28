import { FC, useCallback, useEffect, useState } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";

import { Form, Header, Content, Footer, InputWrapper } from "./style";
import { closeModal } from "src/reducers";
import ButtonForm from "src/ui/ButtonForm";
import { wait } from "src/common/utils/wait";
import { Input, InputPhone } from "src/ui/Input";
import { Textarea } from "src/ui/Textarea";
import { Select } from "src/ui/Select";
import { ISelectOption } from "src/common/types/select";
import { InputEmail } from "src/ui/Input/InputEmail";

const ContactForm: FC = () => {
  const {
    lang: { modal, name: langName },
  } = useSelectorTyped(({ lang }) => lang);
  const dispatch = useDispatchTyped();
  const [statusRequest, setStatusRequest] = useState<
    "success" | "error" | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectOptions, useSelectOptions] = useState<ISelectOption[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [typesWork, setTypesWork] = useState<ISelectOption[]>([]);
  const [message, setMessage] = useState("");

  const changeHandlerName = (valueInput: string) => {
    const searchQueryValue = valueInput.toLowerCase();
    setName(searchQueryValue);
  };

  useEffect(() => {
    const selectList = [
      { label: modal.services1, value: "services1" },
      { label: modal.services2, value: "services2" },
      { label: modal.services3, value: "services3" },
      { label: modal.services4, value: "services4" },
      { label: modal.services5, value: "services5" },
    ];
    useSelectOptions(selectList);
  }, [modal, useSelectOptions]);

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
      <Content>
        <InputWrapper>
          <Input
            label={modal.fullName}
            placeholder={modal.fullNameLabel}
            type="text"
            changeHandler={changeHandlerName}
            value={name}
            handleClickDelete={() => setName("")}
          />
          <InputPhone
            label={modal.phone}
            placeholder={modal.phoneLabel}
            type="text"
            setPhone={setPhone}
            phone={phone}
            langName={langName}
          />
          <InputEmail
            label={modal.mail}
            type="email"
            setEmail={setEmail}
            email={email}
          />
          <Select
            multiple
            options={selectOptions}
            value={typesWork}
            onChange={(o) => setTypesWork(o)}
            defaultText={modal.servicesNull}
          />
        </InputWrapper>
        <Textarea
          label={modal.textLabel}
          placeholder={modal.text}
          setMessage={setMessage}
          message={message}
        />
      </Content>
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
