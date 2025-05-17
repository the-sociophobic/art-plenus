'use client'

import { FC, ReactNode, useEffect } from 'react'

import Header from './Header'
import { FooterCSR } from './Footer'
import LoaderSelfHandled from './LoaderSelfHandled'
import useStore from '../hooks/useStore'


export type AppLayoutProps = {
  children: ReactNode
}


const AppLayout: FC<AppLayoutProps> = ({
  children
}) => {
  const { setIsLoading } = useStore()

  useEffect(() => setIsLoading(false), [])

  return (
    <div className='App'>
      <div
        className='content'
      >
        <Header />
        {children}
        <FooterCSR />
      </div>
      <LoaderSelfHandled />
    </div>
  )
}


export default AppLayout
