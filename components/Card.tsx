import { Box, Text } from "@chakra-ui/react"
import React from "react"
interface CardProps {
    name: string
    state: string
    description: string
    inclusions: Array<string>
    tags: Array<string>
}

export default function Card({
    name,
    state,
    description,
    inclusions,
    tags,
}: CardProps) {
    return (
        <Box  p="24px" borderRadius="8px" borderBottom="1px solid #E2E8F0" >
            <Text as="h3" fontSize="24px">
                {name}
            </Text>
           
            <Text as="p" fontSize="16px">
                {description}
            </Text>
        </Box>
    )
}
