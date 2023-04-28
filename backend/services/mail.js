const nodemailer = require("nodemailer");
const config = require("../config.js");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.correoseguro.co',
  port: 587,
  secure: false,
  auth: {
      user: config.EMAIL_USERNAME,
      pass: config.EMAIL_PASSWORD
  }
});

const sendMail = async function sendMail(email,password,username) {
  await transporter.sendMail({
    from: 'admin@srtesthost.tk', 
    to: [email, 'admin@srtesthost.tk'], 
    subject: "Registro exitoso a FutsApp", 
    html: `<b>Bienvenido ${username} a FutsApp</b><br>Datos de acceso:<br> Cuenta: ${email} <br> Clave: ${password}`, 
  });

  console.log(`Send mail '${email}'`);
  
  return
}
module.exports = {
  sendMail
};
