import executeQuery from "../../../../../_utils/db";
export async function POST(request) {
  try {
       const data=await request.json()
       console.log(data)
    // Check if required data is present
    if (!data.montant || !data.number || !data.user) {
      return new Response(JSON.stringify({ message: "manquantes", affiche: "Donnees manquantes" }), {
        status: 400
      });
    }
   else{
    const code=Math.floor(Math.random() * 10000000)
    console.log(code)
    /* const res = await executeQuery(
        "INSERT INTO paiement ( `iduser`, `modepaiement`, `montant`,number,transactioncode) VALUES (?, ?, ?,?,?)",
        [data.user, data.modepayment, data.montant,data.number,code]
      );  */
       const res=5
      if (res) {
          return new Response(JSON.stringify({ message: "correct" ,code:code}), { status: 200 });
      }
    }
  } catch (error) {
    console.error(error);
    return new Response("Erreur du serveur", { status: 500 });
  }
}