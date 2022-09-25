import { Button, HStack } from "@chakra-ui/react"
import React from "react"

export default function step1() {
    return (
        <HStack spacing="24px">
            <Button colorScheme="brand" variant="solid" />
            <Button colorScheme="brand" variant="outline" />
        </HStack>
    )
}
