import { ContactFormProps } from "src/common/types/lang";

export const contactForm: ContactFormProps = {
  title: "Get in touch",
  buttonText: "Send",
  fullName: "Name*",
  placeholderName: "What is your name?",
  phone: "Phone*",
  placeholderPhone: "Enter phone number",
  mail: "Email *",
  placeholderMail: "Enter your e-mail",
  message: "Message",
  placeholderMessage:
    "Project description, requirements, special requests, budget",
  formDescriptionName: "Enter name*",
  formDescriptionEmail: "Enter email*",
  formDescriptionPhone: "Enter phone*",
  errorDescriptionName: "The number is not entered completely",
  errorDescriptionPhoneLength: "The number is not entered completely",
  errorDescriptionPhoneOperator: "",
  errorDescriptionEmailLength: "The email is too long",
  errorDescriptionEmailValidate: "Check Email",
  customValidityName: "The Name field is required!",
  customValidityPhone: "The Phone field is required!",
  customValidityEmail: "The Email field is required!",
};
