import executeQuery from "../../../../_utils/db";
export async function GET(request){
  try {

            const [{ "COUNT(idpublicite)": nombrePublicite }] = await executeQuery(
                "SELECT COUNT(idpublicite) AS `COUNT(idpublicite)` FROM publicite" );
              
              const [{"nbrusers":numberusers}]= await executeQuery("SELECT COUNT(iduser) as nbrusers FROM users");
              const [{"nbrpromo":numbrepromo}]= await executeQuery("SELECT COUNT(idpromo) as nbrpromo FROM promotion");
            if(numberusers && nombrePublicite && numbrepromo ){
            return Response.json({nbrepub:nombrePublicite,nombreusers:numberusers,nombrepromo:numbrepromo});
            }
            else{
                return Response.json("not data");
            }
            
          
        
      }
   
   catch (error) {
    console.error(error);
    return new Response("Error server")
  }
}
