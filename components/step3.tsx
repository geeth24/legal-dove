import { Button, HStack, Select } from "@chakra-ui/react"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

export default function Step3() {
    return (
        <HStack spacing="24px">
            <Select placeholder="Select area of law">
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
