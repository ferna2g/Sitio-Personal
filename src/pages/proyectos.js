import React from "react"
import Layout from "../components/layout";
import Projects from "../components/projects";
import { Helmet } from "react-helmet";

const Proyectos = () => (
  <Layout>
    <Helmet title="Proyectos"></Helmet>
    <Projects />
  </Layout>
)

export default Proyectos
