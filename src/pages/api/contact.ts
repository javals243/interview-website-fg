import type { NextApiRequest, NextApiResponse } from 'next';

const nodemailer = require('nodemailer');
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const ouput = `
            <h3 style="color:blue; font-size:14px; text-align:center;font-weight:bolde; font-size:20px;">Contact Portfolio</h3>
            <h3>
            Contact
            </h3>
            <ul style="list-style:none; margin-left:0;">
            
            <li style="text-decoration:none;">Nom: ${name}  </li>
            <li>email : ${email} </li>
            <li>Message : ${message} </li>
             <ul>
        `;
    const main = async () => {
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'mail.valerechihisa.com',
        port: 26,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'valere@valerechihisa.com', // generated ethereal user
          pass: 'valere@1024', // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Portfolio VC" <valere@valerechihisa.com>', // sender address
        to: 'jalvie.dev@gmail.com', // list of receivers
        subject: `${subject}`, // Subject line
        text: 'CONTACT', // plain text body
        html: ouput, // html body
      });

      console.log('Message sent: %s', info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    };

    main().catch(console.error);
    return res.json({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
  } else {
    return res.status(500).json({ message: 'Only POST requests are allowed' });
  }
}
