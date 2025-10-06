"use client"

import React, { useEffect } from 'react';
import Head from 'next/head';

const Seo = ({ title }: any) => {

  useEffect(() => {
    document.title = `Hello CRM - ${title}`
  }, [])

  return (
    <>
      <Head>
      <link rel="icon" href="/public/assets/images/brand-logos/favicon.ico" />
       
      </Head>
    </>
  )
}

export default Seo
