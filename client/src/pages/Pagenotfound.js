import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
const Pagenotfound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go back
        </Link>
       <h1>Pagenotfound</h1>
       </div>
    </Layout>

  )
}

export default Pagenotfound