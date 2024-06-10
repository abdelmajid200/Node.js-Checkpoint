const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com', 
    pass: 'password',  
  },
});


let mailOptions = {
  from: '"Name" <email@gmail.com>', 
  to: 'email@gmail.com', 
  subject: 'Hello from Node.js', 
  text: 'Hello Node.js', 
  html: '<b>Hello Node.js</b>', 
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
