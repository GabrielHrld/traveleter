import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Email from '../components/Email'

const ContactPage = () => {
  return (
      <Layout background="true">
        <SEO title="Trips" />
        <Email />
      </Layout>
  )
}

export default ContactPage
