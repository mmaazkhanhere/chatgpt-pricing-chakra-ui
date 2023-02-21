import React from 'react'
import { Box, Flex, Heading, Text, HStack, Button, Icon } from '@chakra-ui/react'
import arrowMark from '../Icons/arrowMark'

export default function Pricing() {
    return (
        <Box maxW='1000px' mx={{ base: '70px', lg: 'auto' }} borderRadius='20px' overflow='hidden' mt='70px' mb='34px'>

            <Flex direction={{ sm: 'column', md: 'column', lg: 'row' }}>

                <Box bg='rgba(71, 21, 95, 0.3)' p='40px' textAlign='center'>

                    <Text fontSize={{ sm: '22px', lg: '30px' }} pt='24px'>
                        ChatGPT Plus
                    </Text>

                    <Heading as='b' fontSize={{ sm: '28px', lg: '60px' }} color='black'>
                        $20
                    </Heading>

                    <Text fontSize='17px'>
                        Billed just once
                    </Text>

                    <Button fontWeight='bold' w='261px' h='52px' mt='32px' borderRadius='15px'>
                        Subscribe
                    </Button>

                </Box>

                <Box bg='rgba(255, 255, 255, 0.6)' pt='24px' pl='54px'>

                    <Text fontSize='18px' mb='21px' >
                        The new subscription plan ChatGPT Plus, will be available for $20/month, and subsrcibers will recieve a number of benefits
                    </Text>

                    <HStack lineHeight='24px'>
                        <Icon as={arrowMark}></Icon>
                        <Text fontSize='18px'>General access to ChatGPT, even during peak times</Text>
                    </HStack>

                    <HStack pt='10px' lineHeight='24px'>
                        <Icon as={arrowMark}></Icon>
                        <Text fontSize='18px'>Faster response times</Text>
                    </HStack>

                    <HStack mt='10px' mb='91px' >
                        <Icon as={arrowMark}></Icon>
                        <Text fontSize='18px'>Priority access to new features and improvements</Text>
                    </HStack>
                </Box>
            </Flex >
        </Box >

    )
}
