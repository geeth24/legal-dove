import { Button, HStack } from "@chakra-ui/react"
import React from "react"

interface step1Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: string
        income: number
        area: string
        tags: Array<string>
    }
}

export default function Step1({ setStep, filters }: step1Props) {
    const onClick = () => {
        setStep(2)
    }

    return (
        <HStack spacing="24px">
            <Button colorScheme="brand" variant="solid">
                YES
            </Button>
            <Button colorScheme="brand" variant="outline">
                NO
            </Button>
        </HStack>
    )
}
