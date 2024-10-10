import React from 'react'
import { Header } from '../../components/common/Header'
import { TopDescription } from '../../components/LandingHolder/Top-Description'
import { OurServices } from '../../components/LandingHolder/OurServices'
import { Statistics } from '../../components/LandingHolder/Statistics'
import { Category } from '../../components/LandingHolder/Category'

const Landing = () => {
  return (
    <div>
        
        <Header />
        <TopDescription />
        <OurServices />
        <Statistics />
        <Category />


    </div>
  )
}

export {Landing}