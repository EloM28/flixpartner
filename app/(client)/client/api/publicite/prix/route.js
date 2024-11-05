import executeQuery from "../../../../../_utils/db";

export async function GET(request){
  try {
            const results = await executeQuery("SELECT * FROM typefacture");
            if(results){
                console.log(results)
                return Response.json(results);
            }
            else{
                return Response.json("not data");
            }
         
          }

          catch(error){
            return new Response.json("error of select")
          }
        }
        
      

    