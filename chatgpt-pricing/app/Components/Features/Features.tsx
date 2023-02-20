
import React from 'react'
import { Box, Flex, Text, HStack, Icon } from '@chakra-ui/react'
import globalicon from '../Icons/globalicon'
import bitcoinIcon from '../Icons/bitcoinIcon'
import payOnce from '../Icons/payOnce'

export default function Features() {
    return (
        <Box>
            <Flex>

                <HStack ml='544px'>
                    <Icon as={globalicon} />
                    <Text>Globally Available</Text>
                </HStack>

                <HStack ml='116'>
                    <Icon as={bitcoinIcon} />
                    <Text>Can pay in cryptocurrency</Text>
                </HStack>

                <HStack ml='87px'>
                    <Icon as={payOnce} />
                    <Text>Pay once and for all</Text>
                </HStack>

            </Flex>
        </Box>
    )
}
