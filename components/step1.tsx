import { Button, HStack } from "@chakra-ui/react"
import React from "react"

interface step1Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: string
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step1({ setStep, filters }: step1Props) {
    const onClick = (e: any) => {
        setStep(2)
        filters.household = e.target.value
    }

    return (
        <HStack spacing="24px">
            <Button
                colorScheme="brand"
                variant="solid"
                onClick={(e) => onClick(e)}
            >
                YES
            </Button>
            <Button
                colorScheme="brand"
                variant="outline"
                onClick={(e) => onClick(e)}
            >
                NO
            </Button>
        </HStack>
    )
}
