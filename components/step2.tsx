import { HStack, Select, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"

interface step2Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: string
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step2({ setStep, filters }: step2Props) {
    const [isEmpty, setIsEmpty] = useState(true)
    const [isError, setIsError] = useState(false)
    const onClick = () => {
        setIsError(filters.location === "")

        setStep(3)
    }

    return (
        <HStack spacing="24px">
            <Select
                placeholder="Select your income"
                onChange={(e) => {
                    filters.income = e.target.value
                    if (e.target.value !== "") {
                        setIsEmpty(false)
                    } else {
                        setIsEmpty(true)
                    }
                }}
            >
                <option value="option1">$1,000 - $5,000</option>
                <option value="option2">$5,000 - $10,000</option>
                <option value="option3">$10,000 - $16,987.99</option>
                <option value="option4">Above $16,988</option>
            </Select>
            <Button
                colorScheme="brand"
                variant="solid"
                onClick={onClick}
                isDisabled={isEmpty}
            >
                <BsArrowRight />
            </Button>
        </HStack>
    )
}
