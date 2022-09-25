import {
    Button,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    FormControl,
    FormHelperText,
    FormErrorMessage,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"

interface step0Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: string
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step0({ setStep, filters }: step0Props) {
    const onClick = () => {
        setIsError(filters.location === "")
        if (isError) {
            setStep(1)
        }
    }
    const [isError, setIsError] = useState(false)

    return (
        <HStack spacing="24px">
            <FormControl isInvalid={isError}>
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
                {!isError ? (
                    <FormHelperText>Enter the location.</FormHelperText>
                ) : (
                    <FormErrorMessage>Location is required.</FormErrorMessage>
                )}
            </FormControl>
        </HStack>
    )
}
