import React from 'react'
import App from 'next/app'
import SiteLayout from '../components/SiteLayout'
import '../css/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    )
  }
}

export default MyApp
