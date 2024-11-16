import executeQuery from "../../../../../_utils/db";
export async function POST(request){
  try {
    const data=  await request.json();
    const id_user=data.id_user;
  
    // Vérifier si les données requises sont présentes
    if (!id_user ) {
     return Response.json({ error: "Données manquantes" });
       return;
    }
    else{
            const publicite = await executeQuery("SELECT * FROM publicite WHERE iduser=?",
            [id_user]);

            if(publicite){
            return Response.json(publicite);
          
            }
            else{
                return Response.json("not data");
            }
           
          }
          
            
          
        
      }
   
   catch (error) {
    console.error(error);
    return new Response("Error server")
  }
}



