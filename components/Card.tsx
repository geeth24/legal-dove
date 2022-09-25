import {
    Badge,
    Box,
    Button,
    HStack,
    Link,
    Text,
    VStack,
} from "@chakra-ui/react"
import React from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import { FiPhone } from "react-icons/fi"
import { CgArrowTopRightR } from "react-icons/cg"
import { FiMapPin } from "react-icons/fi"
interface CardProps {
    name: string
    state: string
    description: string
    inclusions: Array<string>
    tags: Array<string>
    phoneNumber: string
    address: string
    website: string
}

export default function Card({
    name,
    state,
    description,
    inclusions,
    tags,
    phoneNumber,
    address,
    website,
}: CardProps) {
    return (
        <Box p="24px" borderRadius="8px" borderBottom="1px solid #E2E8F0">
            <VStack spacing="8px" align="flex-start">
                <HStack spacing="8px" color="#fff">
                    <Badge colorScheme="green">
                        <HStack spacing="4px">
                            <AiFillCheckCircle />
                            <Text> Accepting cases</Text>
                        </HStack>
                    </Badge>
                    {inclusions.map((item) => {
                        return <Badge colorScheme="gray">{item}</Badge>
                    })}
                </HStack>
                <Text as="h3" fontSize="24px">
                    {name}
                </Text>

                <Text as="p" fontSize="16px">
                    {description}
                </Text>

                <HStack spacing="8px">
                    <Button
                        colorScheme="brand"
                        variant="solid"
                        leftIcon={<FiPhone />}
                        as={Link}
                        href={`tel:${phoneNumber}`}
                    >
                        {phoneNumber}
                    </Button>
                    <Button
                        colorScheme="brand"
                        variant="outline"
                        leftIcon={<FiMapPin />}
                        as={Link}
                        href={`https://www.google.com/maps/place/${address}`}
                    >
                        {address}
                    </Button>
                    <Button
                        colorScheme="brand"
                        variant="ghost"
                        as={Link}
                        href={website}
                        isExternal
                        leftIcon={<CgArrowTopRightR />}
                    >
                        Go to website
                    </Button>
                </HStack>
            </VStack>
        </Box>
    )
}
