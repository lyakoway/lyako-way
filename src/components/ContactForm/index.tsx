import { FC, useCallback, useState } from "react";
import { useDispatchTyped, useSelectorTyped } from "src/store";
import emailjs from "@emailjs/browser";

import { Form, Header, Content, Footer, InputWrapper } from "./style";
import { closeModal, setDataForm, setSantaShown } from "src/reducers";
import ButtonForm from "src/ui/ButtonForm";
import { wait } from "src/common/utils/wait";
import { InputPhone, InputEmail, InputName } from "src/ui/Input";
import { Textarea } from "src/ui/Textarea";
import { useToastNotify } from "src/features/customHooks/use-toast-notify";

// embedded — форма встроена прямо в страницу (не в модалку): убираем
// модальные размеры (max-height, огромный нижний отступ на мобиле, место
// под крестик), см. соответствующие $embedded-ветки в style.ts.
const ContactForm: FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const {
    lang: { contactForm, toast },
  } = useSelectorTyped(({ lang }) => lang);
  const dispatch = useDispatchTyped();
  const [statusRequest, setStatusRequest] = useState<
    "success" | "error" | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const toastNotify = useToastNotify();

  const [formDescriptionName, setFormDescriptionName] = useState("");
  const [formDescriptionEmail, setFormDescriptionEmail] = useState("");
  const [formDescriptionPhone, setFormDescriptionPhone] = useState("");

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);

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
        setFormDescriptionName("");
        setFormDescriptionEmail("");
        setFormDescriptionPhone("");

        const dataForm = {
          user_name: name,
          user_email: email,
          user_phone: phone,
          typesWork: "",
          message: message,
        };

        // https://dashboard.emailjs.com/admin/templates/ipok92p/content - шаблон
        setLoading(true);
        await emailjs
          .send(
            "service_t0637ri",
            "template_hksctsh",
            dataForm,
            "E3IoCn9xU4A9XR0GB"
          )
          .then(
            async () => {
              await wait(2000);
              setLoading(false);
              setStatusRequest("success");
              await wait(2000);
              dispatch(closeModal());
              dispatch(setSantaShown(false));
              dispatch(setDataForm(dataForm));
              toastNotify({ title: toast.messageText, type: "success" });

              // Встроенная форма не закрывается (модалки нет) — очищаем поля
              // после успешной отправки. В модалке компонент размонтируется,
              // поэтому сброс там не нужен (и вызвал бы setState после unmount).
              if (embedded) {
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                setFormDescriptionName("");
                setFormDescriptionEmail("");
                setFormDescriptionPhone("");
                setStatusRequest(null);
              }
            },
            async (error) => {
              console.error("Ошибка при отправке:", error.text);
              await wait(2000);
              setLoading(false);
              toastNotify({
                title: toast.textError,
                type: "error",
              });
            }
          );
      }
    },
    [
      name,
      email,
      phone,
      message,
      validName,
      validEmail,
      validPhone,
      dispatch,
      contactForm,
      toast,
      toastNotify,
      embedded,
    ]
  );

  return (
    <Form>
      <Header $embedded={embedded}>{contactForm.title}</Header>
      <Content $embedded={embedded}>
        <InputWrapper $embedded={embedded}>
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
        </InputWrapper>

        <InputEmail
          label={contactForm.mail}
          type="email"
          setEmail={setEmail}
          email={email}
          description={formDescriptionEmail}
          setValid={setValidEmail}
          setFormDescriptionEmail={setFormDescriptionEmail}
        />

        <Textarea
          label={contactForm.message}
          placeholder={contactForm.placeholderMessage}
          setMessage={setMessage}
          message={message}
        />
      </Content>
      <Footer $embedded={embedded}>
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
