'use client'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Headers from './Components/Headers/Headers'
import Pricing from './Components/Pricing/Pricing'
import Features from './Components/Features/Features'

export default function page() {
  return (
    <ChakraProvider>
      <Headers />
      <Pricing />
      <Features />
    </ChakraProvider>
  )
}
