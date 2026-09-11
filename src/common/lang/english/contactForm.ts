import { ContactFormProps } from "src/common/types/lang";

export const contactForm: ContactFormProps = {
  title: "Get in touch",
  buttonText: "Send",
  fullName: "Name*",
  placeholderName: "What is your name?",
  phone: "Phone",
  placeholderPhone: "Optional",
  mail: "Email *",
  placeholderMail: "Enter your e-mail",
  message: "Message",
  placeholderMessage:
    "Role, team, project — whatever you want to discuss",
  formDescriptionName: "Enter name*",
  formDescriptionEmail: "Enter email*",
  formDescriptionPhone: "Enter phone*",
  errorDescriptionName: "The number is not entered completely",
  errorDescriptionPhoneLength: "The number is not entered completely",
  errorDescriptionPhoneOperator: "",
  errorDescriptionEmailLength: "The email is too long",
  errorDescriptionEmailValidate: "Check Email",
  customValidityName: "The Name field is required!",
  customValidityPhone: "Check the phone number",
  customValidityEmail: "The Email field is required!",
};
