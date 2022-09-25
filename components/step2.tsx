import { HStack, Select, Button } from "@chakra-ui/react"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

export default function step2() {
    return (
        <HStack spacing="24px">
            <Select placeholder="Select your income">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            <Button colorScheme="brand" variant="solid">
                <BsArrowRight />
            </Button>
        </HStack>
    )
}
