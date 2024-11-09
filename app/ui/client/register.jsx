"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { apiLinks, routerLinks } from "@/app/_libs/links";

const Register = () => {
    const router = useRouter();
    const [nom,setNom]=useState('');
    const [prenom,setPrenom]=useState('');
    const [phone,setPhone]=useState('');
    const [mail,setMail]=useState('');
    const [typeuser,setTypesUser]=useState('');
    const [password,setPassword]=useState('');
    const [passwordconf,setPasswordConf]=useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
        
    
    const onClickBoutton= async(e)=>{
        setLoading(true)
        e.preventDefault();
        try {
            if(password===passwordconf){
            const data={
                nom:nom,
                prenom:prenom,
                typeuser:typeuser,
                phone:phone,
                mail:mail,
                password:password,
                
            };
            if(!phone && ! mail){
                console.log("complete your phone number or email")
            }
            else{
                console.log(data);
                const requestOptions = {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                };
                const res = await fetch(apiLinks.register,requestOptions);
                const datas = await res.json()
                if(datas.Success){
                    setLoading(false)
                    router.push(routerLinks.login);
                } else if(datas.data == "errorMail") {
                    setError(datas.message)
                } else {
                    setError('Resgistration failed')
                }
            }
        }
        else{
            setLoading(false)
            setError('Password did not match')
            console.log('confirme votre mot de passe');
        }
        } catch (error) {
            setError('Resgistration failed, please try again')
        } finally  {
            setLoading(false)
        }
        
    }

    return(
        <div className="flex justify-center items-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg my-3" id="signup">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <span className="text-red-600">{error}</span>
            <form action="#" method="POST">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">First name</label>
                    <input type="text" id="name" name="name" required 
                      onChange={(e)=>{setNom(e.target.value)}} value={nom}
                    className="mt-1 p-2 w-full border rounded-md"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Last name</label>
                    <input type="text" id="signup-email" name="email" required 
                     onChange={(e)=>{setPrenom(e.target.value)}} value={prenom}
                    className="mt-1 p-2 w-full border rounded-md" />
                </div>
                <div className="mb-6">
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="signup-password" name="password" required 
                      onChange={(e)=>{setMail(e.target.value)}} value={mail}
                    className="mt-1 p-2 w-full border rounded-md"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" id="name" name="name" required 
                    onChange={(e)=>{setPhone(e.target.value)}} value={phone}
                    className="mt-1 p-2 w-full border rounded-md"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="signup-email" name="email" required 
                    onChange={(e)=>{setPassword(e.target.value)}} value={password}
                    className="mt-1 p-2 w-full border rounded-md"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Confirm password</label>
                    <input type="password" id="signup-password" name="password" required 
                    onChange={(e)=>{setPasswordConf(e.target.value)}} value={passwordconf}
                    className="mt-1 p-2 w-full border rounded-md"/>
                </div>
                <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Type user</label>
                    <select className="block w-full mt-1 p-2 border rounded-md" onChange={(e)=>{setTypesUser(e.target.value)}} value={typeuser}>
                        <option value="option1">partner</option>
                        <option value="option2">Conception site web/app</option>
                        <option value="option3">Sharing Videos</option>
                    </select>
                </div>
               
                <button type="submit" onClick={onClickBoutton} className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{loading? 'Sign...' : 'Sign up'}</button>
            </form>
            <p className="mt-4 text-center">I have already an account! <a href={routerLinks.login} className="text-blue-500 hover:text-blue-700">Sign in</a></p>
          </div>
        </div>
    )

}

export default Register