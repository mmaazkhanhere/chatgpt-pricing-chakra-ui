import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Headers() {
    return (
        <Box bg='#rgba(71, 21, 95, 1)' pt='131px' textAlign={{ base: 'left', md: 'left', lg: 'center' }} maxW='1900px' >

            <Heading as='b' fontSize='60px' color='white' >
                Introducing ChatGPT Plus
            </Heading >

            <Text pt='32px' color='#FFFFFF' fontSize='22px'>
                We are launching a pilot subscription plan for ChatGPT, a converstaional AI that can chat with you, answer
                follow-up questions, and challenge incorrect assumptions
            </Text>

        </Box >
    )
}
