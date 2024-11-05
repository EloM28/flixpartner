import React from 'react'

const Contactus = () => {
  return (
    <div className='pt-10'>
      <div className='md:ml-10'>
      <section className="">
        <div className="flex justify-center items-center">
            <div className="max-w-md w-full bg-blue-400 p-4 rounded-lg shadow-lg" id="signup">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>
                <form action="#" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                        <input type="text" id="name" name="name" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Enter your Name here" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700"></label>
                        <input type="email" id="signup-email" name="email" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  placeholder="Enter your Email here"/>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                            </label>
                            <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Enter your message here"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                </form>
            </div>
        </div>

    </section>
      </div> 
    </div>
  )
}

export default Contactus
