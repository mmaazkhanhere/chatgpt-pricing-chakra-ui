'use client'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Headers from './Components/Headers/Headers'
import Pricing from './Components/Pricing/Pricing'

export default function page() {
  return (
    <ChakraProvider>
      <Headers />
      <Pricing />
    </ChakraProvider>
  )
}
