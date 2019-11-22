const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const getTime = require("./helpers/getTime");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "test.email.visitorapp@gmail.com",
    pass: "visitorapp@1234"
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  var mailOptions = {
    from: "test.email.visitorapp@gmail.com",
    to: "prajwal714singh@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!"
  };

  transporter
    .sendMail(mailOptions)
    .then(res => {
      console.log("Email sent: " + res.response);
    })
    .catch(err => console.log(err));
  res.send("<h1>Hello from Visitor app backend</h1>");
});

app.post("/hostDetails", (req, res) => {
  console.log(req.body);
  return res.status(200);
});

app.post("/userCheckin", (req, res) => {
  console.log(req.body);
  let checkintime = getTime();

  console.log("Checkin time: ", checkintime);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
