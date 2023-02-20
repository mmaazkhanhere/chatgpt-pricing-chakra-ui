import React from 'react'
import { Box, Flex, Heading, Text, HStack, Button, Icon } from '@chakra-ui/react'
import arrowMark from '../Icons/arrowMark'

export default function Pricing() {
    return (
        <Box mt='101px' pl='428px' pr='428px'>
            <Flex>
                <Box bg='rgba(71, 21, 95, 0.3)' borderTopLeftRadius='20px' borderBottomLeftRadius='20px' mb='17px' width='330px' height='273px'>
                    <Heading as='b' textAlign='center' fontSize='30px' pt='414px' pl='67px' pr='67px'>
                        ChatGPT Plus
                    </Heading>
                    <br></br>
                    <Text as='b' fontSize='60px' textAlign='center' pt='43px' pl='108px' color='black'>
                        $20
                    </Text>
                    <Text textAlign='center' fontSize='17px' pl='76px' pr='77px' pt='27px'>
                        Billed just once
                    </Text>
                    <Button as={'b'} w='261px' h='52px' mt='26px' ml='35px' mr='34px' textAlign='center' fontSize='25px'>
                        Subscribe
                    </Button>
                </Box>

                <Box bg='rgba(255, 255, 255, 0.6)' width='727px' height='273px' borderTopRightRadius='20px' borderBottomRightRadius='20px'>
                    <Text mr='53px' ml='53px' fontSize='18px' lineHeight='24px' mt='24px'>
                        The new subscription plan ChatGPT Plus, will be available for $20/month, and subsrcibers will recieve a number of benefits
                    </Text>

                    <HStack mt='21px' ml='33px' >
                        <Icon as={arrowMark}></Icon>
                        <Text fontSize='18px' pl='9px'>General access to ChatGPT, even during peak times</Text>
                    </HStack>

                    <HStack pt='10px' ml='33px' >
                        <Icon as={arrowMark}></Icon>
                        <Text fontSize='18px' pl='9px'>Faster response times</Text>
                    </HStack>

                    <HStack mt='10px' ml='33px' mb='91px' >
                        <Icon as={arrowMark}></Icon>
                        <Text fontSize='18px' pl='9px'>Priority access to new features and improvements</Text>
                    </HStack>
                </Box>
            </Flex >
        </Box >

    )
}
