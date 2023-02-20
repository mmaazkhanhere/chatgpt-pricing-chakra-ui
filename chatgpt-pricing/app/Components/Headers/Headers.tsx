import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Headers() {
    return (
        <Box bg='#rgba(71, 21, 95, 1)' textAlign=' center' pt='131px'>
            <Heading as='b' fontSize='60px' color='white' textAlign='center' >
                Introducing ChatGPT Plus
            </Heading >
            <Text pt='32px' color='#FFFFFF' fontSize='22px' textAlign='center' pl='442px' pr='428px'>
                We are launching a pilot subscription plan for ChatGPT, a converstaional AI that can chat with you, answer
                follow-up questions, and challenge incorrect assumptions
            </Text>
        </Box >
    )
}
