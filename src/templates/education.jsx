import React from "react";
import { graphql} from "gatsby";
import Nav from "../components/Nav";


const Education = (props) => {
    const pageData = props.data.educationJson;

    return (
      <div>
      <Nav />
        <header className="py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="capitalize text-4xl text-center font-bold">{pageData.title}</h2>
            <p className="text-xl text-center">{pageData.description}</p>
          </div>
        </header>
        <ul className="max-w-4xl mx-auto pb-8">
        {
          pageData.items.map((item,index)=>(
            <li className="bg-yellow-200 font-bold shadow mt-4 flex" key={index}>
              <p className="vertical-tex"></p>
              <div className="flex items-center flex-1 p-8">
                <div className="flex-1">
                <h3>{item.name}</h3>
                {
                  //si el item tiene un degree muestra el siguiente span
                  item.degree && <span className="inline-block py-2 px-4 radius bg-orange-400 text-white font-bold">{item.degree}</span>
                }
                {
                  //si tiene url muestre la siguiente etiqueta a
                  item.url && <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn mt-4 inline-block">Ir al Curso</a>
                }
                {
                  //si el item tiene un degree muestra el siguiente span
                  item.platform && <span className="inline-block p-2 border-radius bg-orange-400 text-white">{item.platform}</span>
                }
                </div>
                <div className="inline-block">
                  <span className="inline-block p-2 text-2xl bg-yellow-200 text-black-700">{item.score}</span>
                </div>
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
          score
          url
        }
      }
  }
`;
