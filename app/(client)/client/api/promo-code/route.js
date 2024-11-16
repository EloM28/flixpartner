import executeQuery from "../../../../_utils/db" 

export async function POST(request){
    const datas = await request.json()
    const { user, email, promoCode } = datas
    try {
        console.log('first', user)
        async function checkCodeUniqueness(codepromo, user) {
            // Vérifier si l'email est unique dans la base de données
            try {
                const rows = await executeQuery(`SELECT * FROM promotion WHERE codepromo=? OR iduser=? `, [codepromo, user]);

                // Retourner true si l'email est unique, false sinon
                let exist_code
                console.log('code:', rows)
                if (rows[0] == null) {
                    exist_code = 'true'
                    console.log("2:Codepromo n'existe pas")
                }
                else {
                    exist_code = 'false'
                    console.log('codepromo:', rows[0])
                    console.log("1:Code promo existe")
                }
                return exist_code
            } catch (error) {
                console.log('error in sql for checking Codepromo', error)
            }
        }
        const isUnique = await checkCodeUniqueness(promoCode, user);
        if (isUnique !== 'true') {
            return new Response(JSON.stringify({ data: 'Referral code already exist or user have a referral code.', message: 'errorCode' }));
        }
        const req = await executeQuery('INSERT INTO promotion (iduser, email, codepromo) VALUES (?, ?, ?)', [user, email, promoCode])
        
        if (req.affectedRows > 0) {
            return Response.json({ message: 'Success' })
        } else {
            return Response.json({ message: "Error" })
        }
    } catch (error) {
        console.log('Error', error)
        return Response.json({ message: 'Error', data : "Error in creation of the referral code"})
    }
    
}

export async function GET(request, {params}) {
    const user = request.headers.get('user')

    try {
        const req = await executeQuery('SELECT * FROM promotion WHERE iduser = ?', [user])
        if (req[0] != null) {
            return Response.json({ Success : true, data : req[0]})
        } else {
            return Response.json({ Success : false})
        }
    } catch (error) {
        console.log('Error', error)
        return Response.json({ Success : false})
    }
}

export async function PUT(request, {params}) {
    const datas = await request.json()
    const { user, promoCode } = datas
    try {
        async function checkCodeUniqueness(codepromo) {
        // Vérifier si l'email est unique dans la base de données
        try {
            const rows = await executeQuery(`SELECT * FROM promotion WHERE codepromo=? `, [codepromo]);

            // Retourner true si l'email est unique, false sinon
            let exist_code
            console.log('code:', rows)
            if (rows[0] == null) {
                exist_code = 'true'
                console.log("2:Codepromo n'existe pas")
            }
            else {
                exist_code = 'false'
                console.log('codepromo:', rows[0])
                console.log("1:Code promo existe")
            }
            return exist_code
        } catch (error) {
            console.log('error in sql for checking Codepromo', error)
        }
    }
        const isUnique = await checkCodeUniqueness(promoCode);
        if (isUnique !== 'true') {
            return new Response(JSON.stringify({ data: 'Referral code already exist.', message: 'errorCode' }));
        }

        const req = await executeQuery("UPDATE promotion SET codepromo=? WHERE iduser=?", [promoCode, user])
        if (req.affectedRows > 0) {
            return Response.json({ message: 'Success' })
        } else {
            return Response.json({ message: "Error" })
        }  
    } catch (error) {
        console.log('Error', error)
        return Response.json({ message: 'Error', data : "Error in creation of the referral code"})
    }
    
}