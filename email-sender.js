const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abdulazeemsalau@gmail.com',
        pass: 'jrts ugwr xwvi cbtl'  // Replace with your email password or app-specific password
    }
});

let mailOptions = {
    from: 'abdulazeemsalau@gmail.com',
    to: 'roqeebah2005@gmail.com',  // Sending the email to yourself
    subject: 'Test nodemailer',
    text: `Thanks for the email, Texted you and you didn't reply. Well I'm using my coding skills just to express how you mean to me.
    I love you too Roqeebah
    And mind you I'm single so don't say your gf's again`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});