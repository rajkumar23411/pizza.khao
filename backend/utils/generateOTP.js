const optGenerator = require("otp-generator");

const generateOTP = async () => {
  const otp = await optGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  return otp;
};

module.exports = generateOTP;
