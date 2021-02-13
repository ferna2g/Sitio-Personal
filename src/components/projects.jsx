import React from 'react';
import Dbprojects from '../utils/dbprojects'

const Projects = () => {

  const proBack = Dbprojects.filter((project) => { return project.type === 'back'})

  const proFront = Dbprojects.filter((project) => { return project.type === 'front'})

  return (
    <div>
      <div className="mx-auto">
        <h3 className="text-center text-3xl mt-4 font-bold">Proyectos</h3>
      </div>
      <div className="mx-4 mt-4 text-2xl font-semibold">
        <h3>Proyectos Backend</h3>
      </div>
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          proBack.map((project, index) => (
                <div className="rounded overflow-hidden shadow-lg" key={index}>
                    <img className="w-full" src={project.image} alt=""/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl text-center mb-2">{project.title}</div>
                    </div>
                    <div className="px-6 py-4 pb-2">
                      <p className="text-gray-700 text-base text-center">{project.description}</p>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-gray-200 rounded px-3 py-1 text-sm text-center font-semibold text-gray-70 mx-auto">Ver Proyecto</a>
                    </div>
                </div>
          ))
        }
      </div>

      <div className="mx-4 mt-4 text-2xl font-semibold">
        <h3>Proyectos Frontend</h3>
      </div>

      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          proFront.map((project, index) => (
                <div className="rounded overflow-hidden shadow-lg" key={index}>
                    <img className="w-full" src={project.image} alt=""/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl text-center mb-2">{project.title}</div>
                    </div>
                    <div className="px-6 py-4 pb-2">
                      <p className="text-gray-700 text-base text-center">{project.description}</p>
                    </div>
                    <div className="px-6 py-4 text-center">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-gray-200 rounded px-3 py-1 text-sm text-center font-semibold text-gray-70 mx-auto">Ver Proyecto</a>
                    </div>
                </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects
