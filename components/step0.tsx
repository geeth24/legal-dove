import {
    Button,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

interface step0Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: boolean
        income: number
        area: string
        tags: Array<string>
    }
}

export default function Step0({ setStep, filters }: step0Props) {
    const onClick = () => {
        setStep(1)
    }

    return (
        <HStack spacing="24px">
            <InputGroup>
                <Input
                    placeholder="Enter city, state, or zip code"
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    borderColor="#091D36"
                    color="#091D36"
                    _hover={{ borderColor: "#091D36" }}
                    width="300px"
                    onChange={(e) => {
                        filters.location = e.target.value
                    }}
                />
                <InputRightElement width="3.5rem">
                    <Button
                        colorScheme="brand"
                        onClick={onClick}
                        h="1.75rem"
                        size="sm"
                    >
                        <BsArrowRight />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </HStack>
    )
}
