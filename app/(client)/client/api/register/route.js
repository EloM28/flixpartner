import executeQuery from "@/app/_utils/db";
import bcrypt from "bcryptjs/dist/bcrypt";
export async function POST(request){
  try {
    const data=  await request.json();
    const nom=data.nom;
    const telephone=data.phone;
    const mail=data.mail;
    const pass=data.password
    const typeuser=data.typeuser;
    const prenom=data.prenom;
    // Vérifier si les données requises sont présentes
    async function checkEmailUniqueness(user_email) {
        // Vérifier si l'email est unique dans la base de données
        try {
            const rows = await executeQuery(`SELECT * FROM users WHERE email=? `, [user_email]);

            // Retourner true si l'email est unique, false sinon
            let exist_user
            if (rows[0] == null) {
                exist_user = 'true'
            }
            else {
                exist_user = 'false'
            }
            return exist_user
        } catch (error) {
            console.error('error in sql for checking Mail', error)
        }
    }

    const isUnique = await checkEmailUniqueness(mail);
    if (isUnique !== 'true') {
        return new Response(JSON.stringify({ data: 'errorMail', message: 'Email déjà utilisé.' }));
    }
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(pass, saltRounds);
      const res = await executeQuery(
        "INSERT INTO users (nom,prenom,Telephone, email,motdepasse,typeuser) VALUES (?, ?, ?,?,?,?)",
        [nom,prenom, telephone, mail,hashedPassword,typeuser]
      )
      if(res){
        return Response.json({message:'Datas inserted correctly', Success : true});
      }
  } catch (error) {
    console.error(error);
    return Response.json({data : "Error in registering", Success : false})
  }
}