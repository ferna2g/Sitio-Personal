import React from "react";
import Layout from "../components/layout";
import Information from "../components/Information";
import { Helmet } from "react-helmet";

const IndexPage = () => (
  <Layout>
    <Helmet title="Home"></Helmet>
    <Information />
  </Layout>
)

export default IndexPage
