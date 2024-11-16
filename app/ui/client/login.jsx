"use client"
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/auth";
import { routerLinks, apiLinks } from "../../_libs/links";

const Login=()=>{
  const { login } = useContext(SessionContext)
  const [identifient, SetIdentifiant] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = async (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }

  const handleInputChange1 = (event) => {
    SetIdentifiant(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setPassword(event.target.value);
  };

  const { useRouter } = require('next/navigation');
  const router = useRouter();

  const loginbutton= async(e)=>{
    setLoading(true)
    e.preventDefault();
  try{
          const data={
            identifient:identifient,
            password:password
          }
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          };

          const res = await fetch(apiLinks.login, requestOptions);
          const datas=await res.json();
          if(datas.success){
            const results=datas.results;
            login(datas.token);
            setLoading(false)
            if(results[0].typeuser=='partenaire'){
            router.push(`/client/dashboard`);
            }
            else{
              router.push(`/developpement`);
            }       
          }
          else{
            setLoading(false)
            setError(datas.message)
            const timer = setTimeout(() => {
              setError('')
            }, 4000)
            return () => clearTimeout(timer)
            }
        } catch (error) {
          console.error("Erreur lors de l'insertion des données :", error);
          setError("Erreur lors de l'insertion des données")
        }
      }
    
  useEffect( () =>{
    localStorage.removeItem('token-teramapartrner')
  }, [])

  return(
  <div className="flex justify-center items-center">
    <div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-lg sm:px-6 md:px-8 lg:px-10 mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <span className="text-red-600">{error}</span>
      <form action="#" method="POST">
          <div className="mb-4">
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="login-email" name="email" 
                onChange={handleInputChange1} value={identifient}
              required className="mt-1 p-2 w-full border rounded-md"/>
          </div>
          <div className="mb-6">
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type={showPassword ? "text" : "password"} id="login-password" onChange={handleInputChange2} 
                    value={password}
              name="password" required className="mt-1 p-2 w-full border rounded-md"/>
              {!showPassword ?
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={handleShowPassword} className="sm:w-8 w-6 lg:w-6 sm:h-8 h-6 lg:h-6 absolute right-2 cursor-pointer hover:text-blue-500  text-slate-500" id="show_password" name="eye_show ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={handleShowPassword} className="sm:w-8 w-6 lg:w-6 sm:h-8 h-6 lg:h-6 absolute right-2 cursor-pointer hover:text-blue-500  text-slate-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                          </svg>
                        }
          </div>
          <button type="submit" onClick={loginbutton}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{loading ? 'Login...':'Login'}</button>
      </form>
      <a href="/client/forgotpass" className="text-blue-500 hover:text-blue-700">mot de passe oublie?</a>
      <p className="mt-4 text-center">Don't have an account? <a href={routerLinks.register} className="text-blue-500 hover:text-blue-700">Sign Up</a></p>
    </div>
  </div>
  )
  }

  export default Login
  
  