const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
        user: 'nmapi2022@gmail.com', // generated gmail user - my account google -contraseñas de app 
        pass: process.env.PASS_GMAIL, // generated gmail password (auth 2 pasos) - 
    },
});
transporter.verify().then(() => {
    console.log('ready to send')
});

export const mailOptions = {
    from: 'nmapi2022@gmail.com',
};