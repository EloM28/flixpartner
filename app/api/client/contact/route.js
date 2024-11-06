import executeQuery from "../../../_utils/db";
import { transporter } from "../../../_utils/email";

export async function POST(request){
    const data=await request.json();
    console.log('first', data)
    const {email, textBody, contactName}=data;
    console.log("object",textBody,email,contactName);
    if(email && textBody && contactName){
      
      console.log("ok",email);
        try {
            //Envoie d'Email pour la validation du compte
            const mailOptions = {
              from: email,
              to: 'teramaflix@gmail.com',
              subject: 'Contact us message',
              html: `
                <html>
                  <head>
                    <style>
                    body {
                      font-family: Arial, sans-serif;
                      font-size: 16px;
                      color: black;
                      line-height: 1.5;
                    }
                    
                    .container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                    }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                       ${textBody}
                    </div>
                  </body>
                </html>
              `,
              attachments: [
                {
                 
                }
              ]
            };
            try {
              transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('E-mail envoyé: ' + info.response);
              }
            });
            } catch (error) {
              console.log("Error in sending Mail:",error);
            }
            
              // Exécuter la requête SQL pour inserer le message 
              const req=await executeQuery('INSERT INTO contact (userId,email,name,message,typeMail) VALUES (?,?,?,?,?)',[0,email,contactName,textBody,'contact-us'])
              console.log("object",req);
              if(req){
                return Response.json({response:{message:'Success'}})
              }else{
                console.log("Sql error");
                return Response.json({response:{message:"error",error:'request Server error'}})
              }
        } catch (error) {
            console.log("catcherror",error);
            return Response.json({response:{message:"errorCatched",error:"Request Error"}})
        }
    }else{
        console.log('No data fetched');
        return Response.json({response:{message:"error",error:"data not sended and fetched"}})
    }
}