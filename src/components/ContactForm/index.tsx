import { FC, MouseEvent, useCallback, useEffect, useState } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";

import { Form, Header, Content, Footer, InputWrapper } from "./style";
import { closeModal } from "src/reducers";
import ButtonForm from "src/ui/ButtonForm";
import { wait } from "src/common/utils/wait";
import { InputPhone, InputEmail, InputName } from "src/ui/Input";
import { Textarea } from "src/ui/Textarea";
import { Select } from "src/ui/Select";
import { ISelectOption } from "src/common/types/select";

const ContactForm: FC = () => {
  const {
    lang: { contactForm },
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
  const [formData, setFormData] = useState(null);

  const [formDescriptionName, setFormDescriptionName] = useState("");
  const [formDescriptionEmail, setFormDescriptionEmail] = useState("");
  const [formDescriptionPhone, setFormDescriptionPhone] = useState("");

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);

  const changeHandlerName = (valueInput: string) => {
    const searchQueryValue = valueInput.toLowerCase();
    setName(searchQueryValue);
  };

  useEffect(() => {
    const selectList = [
      { label: contactForm.services1, value: "services1" },
      { label: contactForm.services2, value: "services2" },
      { label: contactForm.services3, value: "services3" },
      { label: contactForm.services4, value: "services4" },
      { label: contactForm.services5, value: "services5" },
    ];
    useSelectOptions(selectList);
  }, [contactForm, useSelectOptions]);

  useEffect(() => {
    const typesWorkValue = typesWork.length
      ? typesWork.map((item) => item.label).join(", ")
      : "";
    const formDataValue = [
      { id: "name", name: "Имя", value: name },
      { id: "email", name: "Почта", value: email },
      { id: "phone", name: "Телефон", value: phone },
      {
        id: "typesWork",
        name: "Список выполняемых работ",
        value: typesWorkValue,
      },
      { id: "message", name: "Сообщение", value: message },
    ];
    setFormData(formDataValue);
  }, [name, email, phone, typesWork, message]);

  const handleCloseButton = useCallback(
    async (e) => {
      e.preventDefault();
      if (!name) {
        setFormDescriptionName(contactForm.formDescriptionName);
      }
      if (!email) {
        setFormDescriptionEmail(contactForm.formDescriptionEmail);
      }
      if (!phone) {
        setFormDescriptionPhone(contactForm.formDescriptionPhone);
      }
      if (name && email && phone && validName && validEmail && validPhone) {
        console.log("!!!valid", validName && validEmail && validPhone);
        setFormDescriptionName("");
        setFormDescriptionEmail("");
        setFormDescriptionPhone("");

        setLoading(true);
        await wait(3000);
        setLoading(false);
        setStatusRequest("success");
        await wait(2000);
        // if (statusRequest === "success") {
        dispatch(closeModal());
        // }
      }
    },
    [
      name,
      email,
      phone,
      validName,
      validEmail,
      validPhone,
      dispatch,
      statusRequest,
      wait,
      setStatusRequest,
      setLoading,
      setFormDescriptionName,
      setFormDescriptionEmail,
      setFormDescriptionPhone,
    ]
  );

  return (
    <Form>
      <Header>{contactForm.title}</Header>
      <Content>
        <InputWrapper>
          <InputName
            label={contactForm.fullName}
            placeholder={contactForm.placeholderName}
            type="text"
            setName={setName}
            name={name}
            description={formDescriptionName}
            setValid={setValidName}
            setFormDescriptionName={setFormDescriptionName}
          />
          <InputPhone
            label={contactForm.phone}
            placeholder={contactForm.placeholderPhone}
            type="text"
            setPhone={setPhone}
            phone={phone}
            description={formDescriptionPhone}
            setValid={setValidPhone}
            setFormDescriptionPhone={setFormDescriptionPhone}
          />
          <InputEmail
            label={contactForm.mail}
            type="email"
            setEmail={setEmail}
            email={email}
            description={formDescriptionEmail}
            setValid={setValidEmail}
            setFormDescriptionEmail={setFormDescriptionEmail}
          />
          <Select
            multiple
            options={selectOptions}
            value={typesWork}
            onChange={(o) => setTypesWork(o)}
            defaultText={contactForm.services}
          />
        </InputWrapper>
        <Textarea
          label={contactForm.message}
          placeholder={contactForm.placeholderMessage}
          setMessage={setMessage}
          message={message}
        />
      </Content>
      <Footer>
        <ButtonForm
          title={contactForm.buttonText}
          handleClick={handleCloseButton}
          loading={loading}
          status={statusRequest}
        />
      </Footer>
    </Form>
  );
};

export default ContactForm;
