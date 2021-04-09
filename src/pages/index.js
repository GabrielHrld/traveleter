import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/Hero';
import Trips from "../components/Trips";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <Trips heading="Our Favorite Destinations"/>
  </Layout>
)

export default IndexPage
