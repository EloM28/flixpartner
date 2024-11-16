import executeQuery from "../../../../../_utils/db";
export async function GET(request){
    try{
     const res= await executeQuery("SELECT * FROM paiement ORDER BY datepaiement DESC LIMIT 1");
     return Response.json(res)
    }
    catch(error){
        console.error(error);
        return new Response("Error server")
    }
}
