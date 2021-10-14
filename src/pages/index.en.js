import React from 'react'
import Intro from '../components/Intro/Intro'
import Missions from '../components/Missions/Missions'
import Services from '../components/Services/Services'
import Layout from "../layouts/layout.en"


const IndexPage = (props) => (
  <Layout location={props.location}>
    <Intro />
    <Services />
    <Missions />
  </Layout>
)

export default IndexPage
