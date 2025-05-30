const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true, // true для 465 порта
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAIL_USER, // Куда будет приходить письмо
    subject: `Новое сообщение от ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: "Письмо отправлено!" });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    res
      .status(500)
      .send({ success: false, message: "Ошибка при отправке письма" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
