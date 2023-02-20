import React from 'react'
import { Box, Flex, Heading, Text, HStack, Button } from '@chakra-ui/react'

export default function Pricing() {
    return (
        <Box mt='101px' pl='428px' pr='428px'>
            <Flex>
                <Box bg='rgba(71, 21, 95, 0.3)'>
                    <Text as='b' textAlign='center' color='black' fontSize='30px' pt='66px' pl='65px' pr='37px' fontWeight='700px'>
                        ChatGPT Plus
                    </Text>
                    <br></br>
                    <Heading as='b' fontSize='60px' textAlign='center' pl='108px' pr='108px' fontWeight='700px'>
                        $20
                    </Heading>
                    <Text textAlign='center' fontSize='17px' pl='76px' pr='77px'>
                        Billed just once
                    </Text>
                    <Button width='261px' height='52px' pl='35px' pr='34px'>
                        Subscribe
                    </Button>
                </Box>
            </Flex >
        </Box >

    )
}
