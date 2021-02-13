import React from "react";
import { graphql} from "gatsby";
import Nav from "../components/Nav";


const Education = (props) => {
    const pageData = props.data.educationJson;

    return (
      <div className="bg-gray-300">
      <Nav />
        <header className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="capitalize text-4xl text-center font-bold">{pageData.title}</h2>
            <p className="text-xl text-center">{pageData.description}</p>
          </div>
        </header>
        <ul className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          pageData.items.map((item,index)=>(
            <li className="font-bold shadow-lg mx-4 my-4 rounded" key={index}>
              <div className=" p-8">
                <div className="text-center py-2 mx-auto ">
                    <h3>{item.name}</h3>
                </div>
                {
                  //si el item tiene un degree muestra el siguiente span
                  item.degree && <div className="py-2 px-4 text-gray-800 text-center font-bold">{item.degree}</div>
                }
                {
                  //si tiene url muestre la siguiente etiqueta a
                  item.url && <div className="px-6 py-4 text-center">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="bg-gray-200 rounded px-3 py-1 text-sm text-center font-semibold text-gray-70 mx-auto">Ir al Curso</a>
                  </div>
                }
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    )
}

export default Education;

export const query = graphql`
  query($slug : String){
      educationJson(slug: {eq: $slug }){
        title
        description
        slug
        items{
          name
          degree
          url
        }
      }
  }
`;
