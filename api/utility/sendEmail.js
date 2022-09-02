import nodemailer from 'nodemailer';


// create email
export const sendEmail = async (to, subject, text) => {

  try {

    let transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "ismail017456@gmail.com",
        pass: "bdsepwtxwwgftexp"
      }
    });


    await transport.sendMail({
      from : 'ismail@gmail.com',
      to : to,
      subject : subject,
      text : text

    });
    
  } catch (error) {
    
    console.log(error);
  }

}