import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from '../components/Trips';

const TripsPage = () => (
  <Layout background="true">
    <SEO title="Trips" />
    <Trips heading="The Best Destinations"/>
  </Layout>
)

export default TripsPage
