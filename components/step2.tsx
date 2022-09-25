import { HStack, Select, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"

interface step2Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: boolean
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step2({ setStep, filters }: step2Props) {
    const [isEmpty, setIsEmpty] = useState(true)
    const onClick = () => {
        if (filters.income === "$16,988 - $34,687.99" && !filters.household) {
        } else if (filters.income === "Above $34,688" && filters.household) {
        } else {
            setStep(3)
        }
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
                <option value="option3">$10,000 - $16,987.99</option>
                <option value="option4">$16,988 - $34,687.99</option>
                <option value="option4">Above $34,688</option>
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
