import executeQuery from "../../../../../_utils/db";
export async function GET(request){
  try {
            const publicite = await executeQuery("SELECT * FROM publicite");
            if(publicite){
            return Response.json({result:publicite});
          
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



