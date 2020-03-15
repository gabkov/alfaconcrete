const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const gmailEmail = "gabor.kovacs.995@gmail.com";
const gmailPassword = "OdTemDar85xx";
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    requireTLS: true,
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});

exports.sendRequestMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        if (req.method !== 'POST') {
            return;
        }

        const mailOptions = {
            from: `<noreply@domain.com>`,
            to: gmailEmail,
            subject: `from my website ${req.body.email}`,
            text: req.body.message,
            html: `<p>${req.body.message}</p>`
        };

        mailTransport.sendMail(mailOptions);

        res.status(200).send({ isEmailSend: true });
    });
});