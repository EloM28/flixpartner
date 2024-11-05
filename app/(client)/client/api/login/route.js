
import { sign } from 'jsonwebtoken';
import executeQuery from '../../../../_utils/db';
import bcrypt from "bcryptjs/dist/bcrypt";
export async function POST(request) {
  try {
  const secret="N33U8477474473"
   const data=  await request.json();
   const identifient=data.identifient;
   const motdepasse=data.password
    console.log(data)
    const results = await executeQuery('SELECT * FROM users WHERE (email=? || Telephone=?) ',([identifient,identifient]))
  console.log('result1',results);
  if (results.length === 0) {
    return Response.json({ message: 'Email introuvable' });
  }
  const isMatch=await bcrypt.compare(motdepasse,results[0].motdepasse)
  console.log('resul1',isMatch);
   if(isMatch){
    const user=results[0];
    const token=sign(
      {
        user:user.iduser,
        email:user.email,
        nom:user.nom,
        prenom:user.prenom,
        typeuser:user.typeuser

      },
      secret
    );
    return Response.json({success:true, results, token});
   }
   else{
    return Response.json({success:false, message: 'Password incorrect' });
   }
  }

  catch(error){
    return Response.json({ message: 'validation error' });
}



}


