const { transporter } = require("./mail-service");
export const sendMail = (from, to, subject, text) => {
    var options = {
        from,
        to,
        subject,
        text
    }
    transporter.sendMail(options, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log("Email sent" + info.response);
        }
    });
}