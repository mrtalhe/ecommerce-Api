const nodemailer = require("nodemailer");
const config = require("config")

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: config.get("EMAIL_SERVICE"),
        port: 587,
        secure: false,
        tls: { rejectUnauthorized: false },
        auth: {
            user: config.get("EMAIL_USER"),
            pass: config.get("EMAIL_PASS")
        },
    });
    const { to, subject, html } = options;
    const info = await transporter.sendMail({ from: config.get("EMAIL_USER"), to, subject, html });
    return `Message sent: %s ${info.messageId}`;
}
module.exports ={sendEmail}