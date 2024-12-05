const nodemailer = require('nodemailer');
export const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: 'test@outlook.com',
        pass: 'password'
    }
});