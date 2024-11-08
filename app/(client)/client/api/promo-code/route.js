import executeQuery from "../../../../_utils/db" 

export default async function POST(request){
    const { user, promocode, email } = await request.json()
    console.log('datas-promo', user, promocode)
    try {
        const req = await executeQuery('INSERT INTO promocode (iduser, email, promocode) VALUES (?, ?, ?)', [user, email, promocode,])
            
        if (req.affectedRows > 0) {
            return Response.json({ message: 'Success' })
        } else {
            return Response.json({ message: "Error" })
            }   
    } catch (error) {
        return Response.json({ message: 'Error', data : "Error in creation of the referral code"})
    }
    
}