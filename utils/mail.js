const nodemailer = require('nodemailer')

exports.generateOTP = (otp_length = 6) => {
    let OTP =  Math.ceil(Math.random()*1000000);
   
    return OTP;
};

exports.generateMailTransporter = () =>
    nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "d74f04527a8569",
            pass: "d3183b02742f46"
        }
    });