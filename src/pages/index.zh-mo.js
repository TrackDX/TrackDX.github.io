import React from 'react'
import Intro from '../components/Intro/Intro'
import Layout from "../layouts/layout.zh-mo"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <Intro />
  </Layout>
)

export default IndexPage
