import {
    Button,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

export default function Step0() {
    return (
        <HStack spacing="24px">
            <InputGroup>
                <Input placeholder="Enter city, state, or zip code" />
                <InputRightElement>
                    <Button colorScheme="brand" variant="solid">
                        <BsArrowRight />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </HStack>
    )
}
