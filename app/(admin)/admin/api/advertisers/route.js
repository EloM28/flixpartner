import executeQuery from "../../../../_utils/db";
export async function GET(request){
  try {
            const res = await executeQuery("SELECT * FROM users");
            console.log(res)
            if(res){
            return Response.json({result:res});
          
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



