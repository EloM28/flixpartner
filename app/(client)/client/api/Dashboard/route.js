import executeQuery from "../../../../_utils/db";
export async function POST(request){
  try {
    const data=  await request.json();
    const id_user=data.id_user;
    const status=1;
  
    // Vérifier si les données requises sont présentes
    if (!id_user ) {
     return Response.json({ error: "Données manquantes" });
       return;
    }
    else{
            const publicite = await executeQuery("SELECT * FROM publicite WHERE iduser=?",
            [id_user]);
            const [{ "COUNT(idpublicite)": nombrePublicite }] = await executeQuery(
                "SELECT COUNT(idpublicite) AS `COUNT(idpublicite)` FROM publicite WHERE iduser=?",
                [id_user]
              );
           const chart=await executeQuery("SELECT MONTH(datecreation) as month, COUNT(idpublicite) as nombre FROM publicite GROUP BY MONTH(datecreation)")
           const [{"nbrpubencour":nombrepubliciteencour}]= await executeQuery("SELECT COUNT(idpublicite) as nbrpubencour FROM publicite WHERE (iduser=? && status=?)",
                ([id_user,status]));
                
            if(publicite){
            return Response.json({publicite:publicite,nbrepub:nombrePublicite,nbrepubencour:nombrepubliciteencour,'count':chart});
             
            }
            if(nombrePublicite){
              return Response.json({nbrepub:nombrePublicite});
            }
            else{
                return Response.json("not data");
            }
           
          }
          
            
          
        
      }
   
 
    //return new Response(JSON.stringify({ nom, telephone, commande }));
    //return new Response(JSON.stringify(nom))
   catch (error) {
    console.error(error);
    return new Response("Error server")
  }
}

export async function GET(request){

    try{
      
     const rows= await executeQuery("SELECT * FROM publicite");
     //return  Response({'count': rows[0],'stats': rows});
     return  Response(rows);
    }

    catch(error){
        console.error(error);
        return Response("Error server")
    }
}

