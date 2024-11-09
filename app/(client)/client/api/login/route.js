
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
          exp: 60 * 60 * 24 * 3,
          user:user.iduser,
          email:user.email,
          nom:user.nom,
          prenom:user.prenom,
          typeuser:user.typeuser

        },
        secret
      );
      const cookieOptions = {
      httpOnly: true, // Prevent JavaScript access
      secure: process.env.NODE_ENV !== 'development', // Secure cookie (HTTPS only) in production
      sameSite: 'strict', // Mitigate CSRF attacks
      maxAge: 60 * 60 * 24 * 3, // Expires in 3 day (seconds)
      path: '/',
    };
      const cookieString = `token-teramapartrner=${token}; ${Object.entries(cookieOptions).map(([key, value]) => `${key}=${value}`).join('; ')}`;
      const response = Response.json({success:true, results, token});
      response.headers.set('Set-Cookie', cookieString);
      return response;
   }
   else{
    return Response.json({success:false, message: 'Password incorrect' });
   }
  }

  catch(error){
    return Response.json({ message: 'validation error' });
}



}


