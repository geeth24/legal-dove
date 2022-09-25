import { Button, HStack } from "@chakra-ui/react"
import React from "react"

interface step0Props {
    setStep: (arg0: number) => void
}

export default function step1({ setStep }: step0Props) {
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
