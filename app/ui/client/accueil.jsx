'use client'
import { useState,useEffect } from "react";
const  Accueil=()=>{
  const [contactName, setContactName] = useState("")
  const [email, setEmail] = useState("")
  const [textBody, setTextBody] = useState("")
  const [newsLetter, setNewsLetter ] = useState("")
  const [errorContact, setErrorContact] = useState("")
  const [success, setSuccess] = useState("")
  const [succed, setSucced] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(false)
  const [loadingContact, setLoadingContact] = useState(false)
  
  const slides = [
      { image: '/images/info1.png', title: 'We can help you develop web and mobile applications' },
      { image: '/images/phtheb.png', title: 'We can help you with hosting your website' },
      { image: '/images/pbc.png', title: "You can get benefits with a promo code from affiliates. We can promote your products to increase their visibility. If you don't have a video, we can help you create one. Our large audience ensures that your products will be seen by many people" },
  ];

  const handleSendContact = async(e) => {
    e.preventDefault()
    setLoadingContact(true)
    try {
        const requestOptions = {
        method : 'POST',
        headers : {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify({
          email,
          textBody,
          contactName,
        })
      }
      const response = await fetch('/api/client/contact', requestOptions)
      
      if (response){
        const data = await response.json();
        if (data.message == 'Success'){
          alert('Contact Message send Successfully')
        }
        else{
          setErrorContact('Message not send, Try again later')
          const timer = setTimeout(()=>{
            setErrorContact('')
          },
            4000
          )
          
          console.log('error',response)
        }
      }
      else{
        setErrorContact('Mail not sended try again later')
      }
    } catch (error) {
      setErrorContact('Erreur dans l\'envoi ')
    }
    finally{
      setLoadingContact(false)
    }
    
  }

  const handleClickNewsLetter = async(e)=>{
    e.preventDefault()
    if (newsLetter == ''){
      setSuccess("You must enter your Email")
      const timer = setTimeout(() => {
        setSuccess('')
      }, 4000);
      return () => clearTimeout(timer);
    }
    setLoading(true)
    try {
      const requestOptions = {
        method : 'POST',
        headers : {
          "Content-Type" : "application/json", 
        },
        body : JSON.stringify({
          newsLetter
        })
      }
      const req = await fetch('/api/client/newsLetter', requestOptions)
      if (req){
        const response = await req.json()
        if (response.message === 'Success'){
          setSucced(true)
          setSuccess('You are well saved to the newsLetter')
          const timer = setTimeout(() => {
            setSuccess('')
            setSucced(false)
          }, 4000);
          return () => clearTimeout(timer);
        }
        else if (response.message != 'Error' && message != 'Success'){
          setSuccess(response.message)
          const timer = setTimeout(() => {
            setSuccess('')
          }, 4000);
          return () => clearTimeout(timer);
        }
        else{
          setSuccess('You are not saved to the newsLetter, Please try again later')
          const timer = setTimeout(() => {
            setSuccess('')
          }, 4000);
          return () => clearTimeout(timer);
        }
      }
    } catch (error) {
      const timer = setTimeout(() => {
        setSuccess("Error in submitting at newsLetter, Please try again later")
      }, 4000);
      return () => clearTimeout(timer);
    }
    finally{
      setLoading(false)
    }
  }
  const handleClick = () => {
    const menu = document.getElementById('services-menu');
    menu.classList.toggle('active');
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Changer de slide toutes les 5 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle lors du démontage
  }, [slides.length]);

  useEffect(() => {
    const button = document.getElementById('services-btn');
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div
  className="relative w-[100%] h-screen" 
>

    <nav className="flex items-center justify-between flex-wrap md:flex-nowrap bg-white p-4">
        <div className="flex md:ml-10 lg:ml-20">
        <a href="/"><img src="/images/TeramaFlixpic.ico" alt="Logo" className="h-14 mr-4"/></a>
        <p className="text-blue-700 py-3 md:py-0">TeramaFlix Partnership</p>
        </div>

        <div className="block md:hidden">
            <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500 hover:text-blue-800 hover:border-blue-800">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>

        <div className="w-full flex-grow md:flex md:items-center md:space-x-4 lg:space-x-10 hidden md:block pt-6 md:pt-0 mr-10 lg:mr-20" id="nav-content">
            <ul className="list-reset md:flex justify-end flex-1 items-center">
                <li className="mr-3">
                    <a className="inline-block py-2 px-4 text-sm lg:text-base font-medium hover:text-blue-500 no-underline" href="/">Accueil</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block no-underline hover:text-blue-500 hover:text-underline py-2 px-4 text-sm lg:text-base font-medium" href="#about-us">About Us</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block no-underline hover:text-blue-500 hover:text-underline py-2 px-4 text-sm lg:text-base font-medium" href="#ourteam">Our team</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block no-underline hover:text-blue-500 hover:text-underline py-2 px-4 text-sm lg:text-base font-medium" href="#contact">Contact</a>
                </li>
                <li className="mr-3">
                    <div className="relative group">
                        <button id="services-btn" className="inline-block no-underline hover:text-blue-500 hover:text-underline py-2 px-4 text-sm lg:text-base font-medium">Services</button>
                        <div id="services-menu" className="absolute bg-blue-500 dropdown-content z-10 hidden">
                            <a href="/client/login" className="block px-4 py-2 text-sm lg:text-base text-white">Partenariat</a>
                            <a href="/client/login" className="block px-4 py-2 text-sm lg:text-base text-white">Conception<span className="text-blue-500">a</span>site<span className="text-blue-500">a</span>web/App</a>
                        </div>
                    </div>
                </li>
                <li className="mr-3">
                    <a className="inline-block no-underline hover:text-blue-500 hover:text-underline py-2 px-4 text-sm lg:text-base font-medium" href="#actualite">Actuality</a>
                </li>
            </ul>
        </div>
    
    </nav>

    <section className="mx-auto bg-blue-800 mb-20">
            <div id="carousel" className="relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`mySlides page-section carousel-item ${
                            index === currentSlide ? 'active' : 'hidden'
                        }`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            height: '100vh',
                            opacity: 1.3,
                        }}
                    >
                        <div className="flex items-center justify-center h-full">
                            <p className="text-sm xl:text-2xl lg:text-xl font-bold mx-10 text-black">
                                {slide.title}
                            </p>
                        </div>
                        <a
                            className="prev absolute top-1/2 left-15 -translate-y-1/2 text-black hover:text-gray-300 cursor-pointer bg-white"
                            style={{ border: '2px solid white', fontSize: '40px' }}
                            onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
                        >
                            &#10094;
                        </a>
                        <a
                            className="next absolute top-1/2 right-10 -translate-y-1/2 text-black hover:text-gray-300 cursor-pointer bg-white"
                            style={{ border: '2px solid white', fontSize: '40px' }}
                            onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
                        >
                            &#10095;
                        </a>
                    </div>
                ))}
            </div>
        </section>

    <section id='about-us' className="p-6 backdrop-blur-xl m-5 border border-2 border-blue-700 rounded">
        <h1 className="text-white text-center text-2xl font-bold mb-10 backdrop-blur-xl">About Us</h1>
        <div className="mx-auto space-y-7 lg:space-y-0 lg:flex lg:space-x-10 items-center justify-between">
            <img src="/images/photoT.jpg" alt="Description de l'image" className="lg:w-1/2 opacity-75 shadow-2xl rounded" />
            <p className="text-center text-white lg:w-1/2">TeramaFlix is ​​a revolutionary project that has the potential to transform the way we appreciate and showcase video content in the sub-region. It is not just a web platform, but a real evolution in the creation of visual content in our region. Terama is made up of 8 people.</p>
        </div>



        
    </section>

    <section>
       <div className=" mx-auto bg-gray-200 text-gray-600 mt-40 sm:mt-32 pt-4">
                <div className="text-2xl mb-10 text-center font-bold text-black">Our services</div>
                <div className="blockScroll flex flex-wrap items-center mt-4">
                  <div className="w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 sm:mx-auto">
                  <a href="">
                  <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-black">
                      <img
                        alt="..."
                        src="/images/bi-removebg-preview.png"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-[95px] -top-[94px]"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-black fill-current"
                          ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                          Advertisement
                        </h4>
                        {/* <p className="text-md font-light mt-2 text-white">
                          Putting together a page has never been easier than matching
                          together pre-made components. From landing pages
                          presentation to login areas, you can easily customise and
                          built your pages.
                        </p> */}
                      </blockquote>
                    </div>
                  </a>
                  </div>
                <div className="w-full md:w-6/12 px-4 sm:mx-auto">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col mt-4">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              <i className="fas fa-sitemap"></i>
                            </div>
                            <h6 className="text-xl mb-1 font-semibold">
                              Promo Code
                            </h6>
                            <p className="mb-4 text-gray-500">
                              When you get a promo code, you can enjoy several benefits from affiliates.
                              <span className="text-blue-500">
                                <a href="/client/login">Get promo code.</a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="relative flex flex-col min-w-0">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              <i className="fas fa-drafting-compass"></i>
                            </div>
                            <h6 className="text-xl mb-1 font-semibold">
                              Product publication
                            </h6>
                            <p className="mb-4 text-gray-500">
                              We can highlight your products to increase their visibility and make them known to a wide audience.
                              <span className="text-blue-500">
                                <a href="/client/login">Publish a product.</a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 mt-4">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              <i className="fas fa-newspaper"></i>
                            </div>
                            <h6 className="text-xl mb-1 font-semibold">Video editing</h6>
                            <p className="mb-4 text-gray-500">
                              If you don't have a video, we can help you edit it. 
                              <span className="text-blue-500">
                                <a href="/client/login">Click here to make the montage.</a>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="relative flex flex-col min-w-0">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              <i className="fas fa-file-alt"></i>
                            </div>
                            <h6 className="text-xl mb-1 font-semibold">
                              Large audience
                            </h6>
                            <p className="mb-4 text-gray-500">
                              We have a large audience, which means many people will see your products.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blockScroll flex flex-wrap items-center mt-4">
                  <div className="w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 sm:mx-auto">
                  <a href="">
                  <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-black">
                      <img
                        alt="..."
                        src="/images/ci-removebg-preview.png"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-[95px] -top-[94px]"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-black fill-current"
                          ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                          Web and mobile development
                        </h4>
                        {/* <p className="text-md font-light mt-2 text-white">
                          Putting together a page has never been easier than matching
                          together pre-made components. From landing pages
                          presentation to login areas, you can easily customise and
                          built your pages.
                        </p> */}
                      </blockquote>
                    </div>
                  </a>
                  </div>
                <div className="w-full md:w-6/12 px-4 sm:mx-auto">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col mt-4">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              <i className="fas fa-sitemap"></i>
                            </div>
                            <h6 className="text-xl mb-1 font-semibold">
                              Web application development
                            </h6>
                            <p className="mb-4 text-gray-500">
                              We can help you develop web applications. 
                              <span className="text-blue-500">
                                <a href="/client/login">Click here.</a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 mt-4">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              <i className="fas fa-newspaper"></i>
                            </div>
                            <h6 className="text-xl mb-1 font-semibold">Mobile application development</h6>
                            <p className="mb-4 text-gray-500">
                              We can help you develop mobile applications. 
                              <span className="text-blue-500">
                                <a href="/client/login">Click here.</a>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="blockScroll flex flex-wrap items-center mt-8">
                  <div className="w-full md:w-6/12 lg:w-4/12 px-12 md:px-4 sm:mx-auto">
                  <a href="">
                  <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-black">
                      <img
                        alt="..."
                        src="/images/phtheb.png"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-[95px] -top-[94px]"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-black fill-current"
                          ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                          Hosting
                        </h4>
                        {/* <p className="text-md font-light mt-2 text-white">
                          Putting together a page has never been easier than matching
                          together pre-made components. From landing pages
                          presentation to login areas, you can easily customise and
                          built your pages.
                        </p> */}
                      </blockquote>
                    </div>
                  </a>
                  </div>
                <div className="w-full md:w-6/12 px-4 sm:mx-auto">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col mt-4">
                          <div className="px-4 py-5 flex-auto">
                            <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                              <i className="fas fa-sitemap"></i>
                            </div>
                            <h6 className="text-xl mb-1 font-semibold">
                              Hosting
                            </h6>
                            <p className="mb-4 text-gray-500">
                              We can help you with hosting your website. <span className="text-blue-500"><a href="">Click here.</a></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

       </div>
    </section>
    
    <section id="ourteam" className="p-6 mt-12">
        <div className="mx-auto text-center py-8 space-y-7">
            <h1 className="text-2xl font-bold mb-3 text-white">Our Team</h1>
            <div className="flex justify-center space-x-4">
                <div className="space-y-10 justify-center">
                  <div className="xl:flex xl:space-x-5 space-y-10 xl:space-y-0">
                    <div className="md:flex md:space-x-5 space-y-10 md:space-y-0">
                    <div className="relative shadow-lg">
                      <img src="/images/Eric.JPG" alt="" className="h-80 w-full rounded-full shadow-lg opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-white bg-opacity-85 rounded-b-full p-3 space-y-2">
                          <p className="text-xl font-bold">Directeur General</p>
                          <p className="text-base text-blue-500 font-bold">NDUWAYO Eric</p>
                      </div>
                    </div>
                    <div className="relative shadow-lg">
                      <img src="/images/Eric.JPG" alt="" className="h-80 w-full rounded-full shadow-lg opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-white bg-opacity-85 rounded-b-full p-3 space-y-2">
                          <p className="text-xl font-bold">Directeur General</p>
                          <p className="text-base text-blue-500 font-bold">NDUWAYO Eric</p>
                      </div>
                    </div>
                    </div>
                    <div className="md:flex md:space-x-5 space-y-10 md:space-y-0">
                    <div className="relative shadow-lg">
                      <img src="/images/Eric.JPG" alt="" className="h-80 w-full rounded-full shadow-lg opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-white bg-opacity-85 rounded-b-full p-3 space-y-2">
                          <p className="text-xl font-bold">Directeur General</p>
                          <p className="text-base text-blue-500 font-bold">NDUWAYO Eric</p>
                      </div>
                    </div>
                    <div className="relative shadow-lg">
                      <img src="/images/Eric.JPG" alt="" className="h-80 w-full rounded-full shadow-lg opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-white bg-opacity-85 rounded-b-full p-3 space-y-2">
                          <p className="text-xl font-bold">Directeur General</p>
                          <p className="text-base text-blue-500 font-bold">NDUWAYO Eric</p>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="xl:flex xl:space-x-5 space-y-10 xl:space-y-0">
                    <div className="md:flex md:space-x-5 space-y-10 md:space-y-0">
                    <div className="relative shadow-lg">
                      <img src="/images/Eric.JPG" alt="" className="h-80 w-full rounded-full shadow-lg opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-white bg-opacity-85 rounded-b-full p-3 space-y-2">
                          <p className="text-xl font-bold">Directeur General</p>
                          <p className="text-base text-blue-500 font-bold">NDUWAYO Eric</p>
                      </div>
                    </div>
                    <div className="relative shadow-lg">
                      <img src="/images/Eric.JPG" alt="" className="h-80 w-full rounded-full shadow-lg opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-white bg-opacity-85 rounded-b-full p-3 space-y-2">
                          <p className="text-xl font-bold">Directeur General</p>
                          <p className="text-base text-blue-500 font-bold">NDUWAYO Eric</p>
                      </div>
                    </div>
                    </div>
                    <div className="md:flex md:space-x-5 space-y-10 md:space-y-0">
                    <div className="relative shadow-lg">
                      <img src="/images/Eric.JPG" alt="" className="h-80 w-full rounded-full shadow-lg opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-white bg-opacity-85 rounded-b-full p-3 space-y-2">
                          <p className="text-xl font-bold">Directeur General</p>
                          <p className="text-base text-blue-500 font-bold">NDUWAYO Eric</p>
                      </div>
                    </div>
                    <div className="relative shadow-lg">
                      <img src="/images/Eric.JPG" alt="" className="h-80 w-full rounded-full shadow-lg opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center bg-white bg-opacity-85 rounded-b-full p-3 space-y-2">
                          <p className="text-xl font-bold">Directeur General</p>
                          <p className="text-base text-blue-500 font-bold">NDUWAYO Eric</p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>


<section id="contact" className="p-6">
    <div className="flex justify-center items-center">
        <div className="max-w-md w-full bg-blue-400 p-4 rounded-lg shadow-lg" id="signup">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Us</h2>
            <span className="text-red-500">{errorContact}</span>
            <form action="#" method="POST">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                    <input type="text" value={contactName} onChange={(e)=>setContactName(e.target.value)} id="name" name="name" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter your Name here" />
                </div>
                <div className="mb-4">
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700"></label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="signup-email" name="email" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter your Email here" />
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                        </label>
                        <textarea value={textBody} onChange={(e)=>setTextBody(e.target.value)} className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Enter your message here"></textarea>
                    </div>
                </div>
                <button type="submit" onClick={handleSendContact} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{loadingContact ? 'Sending...' : 'Send'}</button>
            </form>
          </div>
        </div>
     

</section> 
    <footer className="md:px-40 lg:px-2 backdrop-blur-2xl rounded border border-blue-700 text-white mt-10 p-4 2xl:px-24">
        <div className="space-y-7 md:space-y-0 md:flex lg:space-x-12 xl:space-x-36">
            <div className="space-y-7 lg:space-y-0 lg:flex lg:space-x-12 xl:space-x-36">
           
            <div>
                <img src="/images/TeramaFlixpic.ico" alt="Photo" className="w-[75%] " />
            </div>
            
         
            <div>
                <h3 className="font-bold mb-4">Menus</h3>
                <ul>
                    <li><input type="checkbox" /> Accueil</li>
                    <li><input type="checkbox"/> About Us</li>
                    <li><input type="checkbox"/> Services</li>
                    <li><input type="checkbox"/> Contact</li>
                </ul>
            </div>
            </div>
            
            <div className="space-y-7 md:space-y-8 lg:space-y-0 lg:flex lg:space-x-12 xl:space-x-28">
            <div>
                <h3 className="font-bold mb-4">Address</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex space-x-2">
                    <svg className="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <p>Burundi, Bujumbura</p>
                  </div>
                  <div className="flex space-x-2">
                    <svg className="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <p>+257 71174167</p>
                  </div>
                  <div className="flex space-x-2">
                    <svg className="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <p>teramaflix@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex space-x-5">
            
                  <span className="border border-white p-2 rounded [&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 320 512">

                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
    
                  <span className="border border-white p-2 rounded [&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512">
                     
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
    

                  <span className="border border-white p-2 rounded [&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512">
                    
                      <path
                        d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                  </span>
    
                
                  <span className="border border-white p-2 rounded [&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512">
                     
                      <path
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </span>
                </div>
            </div>
            
           
            <div>
                <h3 className="font-bold">Newsletter</h3>
                <div className="flex">
                  <form>
                    <p className="w-80 mt-4 mb-2">For any collaboration requests, or to find out how TeramaFlix can help you on your digital journey, please contact us</p>
                    <div> 
                        {/* <textarea type="text" placeholder="Your message" className="border border-gray-300 rounded-l px-2 py-2 w-80 text-gray-700" ></textarea> */}
                     <span className={`${succed ? "text-green-400" : "text-red-400"}`}>{success}</span>
                     <div className="flex">
                      <input type="email" value={newsLetter} onChange={(e)=>{setNewsLetter(e.target.value)}} placeholder="Your email" className="border border-gray-300 px-3 py-2 text-gray-700" />
                      <button type="submit" onClick={handleClickNewsLetter} className="bg-white hover:text-white hover:bg-blue-700 text-blue-500 font-bold rounded-r px-5 py-2">
                      {loading ? 'Sending...' : 'Send'}
                    </button>
                    </div>
                    </div>
                  </form>
                </div>
            </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default Accueil
