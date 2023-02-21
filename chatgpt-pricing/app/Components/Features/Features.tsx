
import React from 'react'
import { Box, Flex, Text, HStack, Icon } from '@chakra-ui/react'
import globalicon from '../Icons/globalicon'
import bitcoinIcon from '../Icons/bitcoinIcon'
import payOnce from '../Icons/payOnce'

export default function Features() {
    return (
        <Box>
            <Flex>

                <HStack>
                    <Icon as={globalicon} />
                    <Text>Globally Available</Text>
                </HStack>

                <HStack>
                    <Icon as={bitcoinIcon} />
                    <Text>Can pay in cryptocurrency</Text>
                </HStack>

                <HStack>
                    <Icon as={payOnce} />
                    <Text>Pay once and for all</Text>
                </HStack>

            </Flex>
        </Box>
    )
}
