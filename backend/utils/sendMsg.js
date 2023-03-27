const twilio = require("twilio")(process.env.accountSid, process.env.authToken);
const sendMsg = async (otp, phone) => {
  await twilio.messages
    .create({
      body: `Your OTP is ${otp}`,
      from: process.env.messageNum,
      to: phone,
    })
    .then((msg) => console.log(`Message send to ${msg.to} successfully`))
    .catch((err) => console.log(`Could not send message beacuse` + err));
};

module.exports = sendMsg;
