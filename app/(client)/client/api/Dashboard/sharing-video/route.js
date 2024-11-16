import executeQuery from "../../../../../_utils/db"

export async function GET(request) {
    const user = request.headers.get('user')
    try {
        const req = await executeQuery('SELECT * FROM sharevideo WHERE id_user = ? ORDER BY created_at DESC',[user])
        if (req){
            return Response.json({success: true, datas : req})
        } else {
            return Response.json({success: false})
        }
    } catch (error) {
        console.error(error)
        return Response.json({error:'Server Error'})
    }
}