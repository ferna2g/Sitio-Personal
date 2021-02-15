import React from "react";
import { Link } from "gatsby";
import Socials from "./Socials";
import ilustration from '../imgs/5f7a57894e7f1.jpg';

const Information = () => {

  return (
    <div className="bg-gray-200 mx-auto p-8">
      <div className="flex-1">
        <div className="text-center">
          <h2 className="font-bold text-black-100 p-3 text-4xl mx-auto">Ariel Fernando Gerónimo Gil</h2>
        </div>
        <div className="bg-gray-200 md:flex bg-white rounded-lg p-8 justify-center">
            <img className="h-56 w-56 md:h-64 md:w-64 rounded-full mx-auto md:mx-0 md:mr-12" src={ilustration} alt="fotos"/>
            <div className="text-center md:text-left">
              <h2 className="text-lg text-2xl mt-4">Programador Junior</h2>
              <h2 className="text-lg mt-4">Autodidacta, entusiasta</h2>
              <h2 className="font-bold text-lg mt-4 md:ml-10">Conoce mas</h2>
              <svg className="animate-bounce w-6 h-6 ...">

              </svg>
              <Link className="btn mx-10" to="/proyectos">Proyectos</Link>
            </div>
        </div>
      </div>
      <Socials />
    </div>
  )
}

export default Information;
