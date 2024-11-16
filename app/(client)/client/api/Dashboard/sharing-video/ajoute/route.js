import executeQuery from "../../../../../../_utils/db";

export async function POST(request) {
    try {
        const data=await request.json()    
        const title = data.title
        const datefin = data.datefin
        const vidId = data.vidId
        const days = data.days
        const price = data.prixsharing
        const iduser = data.iduser
        const idpaiement = data.idpaiement
      
  
      // Check if required data is present
      if (!title || !vidId || !iduser || !datefin || !idpaiement) {
        return new Response(JSON.stringify({ message: "manquantes", affiche: "Donnees manquantes" }), {
          status: 400
        });
      }
  
        // Execute the database query
       const res = await executeQuery(
          "INSERT INTO sharevideo (id_user,idpaiement, idvideo, title, datefin,days, price) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [iduser,idpaiement, vidId, title, datefin, days, price]
        ); 
  
        if (res.affectedRows > 0) {
          return new Response(JSON.stringify({ message: "correct" }), { status: 200 });
        } else {
            console.log( "Sharing video insert failed" )
          return new Response(JSON.stringify({ message: "boosting video not setted, please try again late" }), {
            status: 400
          });
      }  
    } catch (error) {
      console.error(error);
      return new Response("Erreur du serveur", { status: 500 });
    }
  }