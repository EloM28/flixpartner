import executeQuery from "../../../_utils/db";

export async function POST(request) {

    async function checkEmailExist(email) {
        // Vérifier si l'email est unique dans la base de données
        try {
          // Exécuter la requête SQL pour récupérer les videos
          const rows = await executeQuery(`SELECT * FROM newsletter WHERE email=? `, [email]);
    
          // Retourner true si l'email est unique, false sinon
          let mess = ""
          if (rows[0] == null) {
            mess = "false"
            return mess
          }
          else {
            mess = "true"
            return mess
          }
        } catch (error) {
          console.error('error in sql for checking Mail', error)
        }
      }

    try {
    const data = await request.json()
    console.log('firstop', data)
    const isExist = await checkEmailExist(data.newsLetter)
    if (isExist == "false"){
        const res = await executeQuery('INSERT INTO newsletter (email) VALUES (?)',[data.newsLetter])
    if (res.affectedRows>0){
        return Response.json({message:"Success"})
    } 
    }
    else{
        console.log('Email already exists')
        return Response.json({message: 'Email already exists'})
    }
    } catch (error) {
        console.log('Error at insertion in newsLetter table')
        return Response.json({message: "Error"})
    }
    
}