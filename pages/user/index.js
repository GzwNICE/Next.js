import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'
import { Button } from 'antd'
// import fetch from ''
import style from './index.css'

export default class User extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <Head>
          <title>User</title>
        </Head>
        <Nav />
        <div className='box'>
          <div>user page</div>
          <Button type="primary">antd按钮</Button>
        </div>
      </div>
    )
  }
}
// User.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }

