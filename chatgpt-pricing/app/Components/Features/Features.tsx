
import React from 'react'
import { Box, Flex, Text, HStack, Icon } from '@chakra-ui/react'
import globalicon from '../Icons/globalicon'
import bitcoinIcon from '../Icons/bitcoinIcon'
import payOnce from '../Icons/payOnce'

export default function Features() {
    return (
        <Box maxW='800px' m='auto' pl='50px'>
            <Flex direction={{ base: 'column', lg: 'row' }}>

                <HStack pl='30px'>
                    <Icon as={globalicon} />
                    <Text>Globally Available</Text>
                </HStack>

                <HStack pl='30px'>
                    <Icon as={bitcoinIcon} />
                    <Text>Can pay in cryptocurrency</Text>
                </HStack>

                <HStack pl='30px'>
                    <Icon as={payOnce} />
                    <Text>Pay once and for all</Text>
                </HStack>

            </Flex>
        </Box>
    )
}
