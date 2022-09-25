import React, { useState } from "react"
import { Flex, Text, chakra } from "@chakra-ui/react"
import Step0 from "./step0"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"

export default function Form() {
    const [step, setStep] = useState(0)
    const [subHeading, setSubHeading] = useState([
        "- We're Here to Help",
        "- Step 1 of 4",
        "- Step 2 of 4",
        "- Step 3 of 4",
        "- Step 4 of 4",
    ])
    const [heading, setHeading] = useState([
        "Get the free legal help you need.",
        "Do you live in a household of four or more?",
        "What is your annual household income?",
        "What are of law do you need?",
        "- Step 4 of 4",
    ])
    const [input, setInput] = useState([
        <Step0 key={0} setStep={setStep} />,
        <Step1 key={1} setStep={setStep} />,
        <Step2 key={2} setStep={setStep} />,
        <Step3 key={3} setStep={setStep} />,
        <Step4 key={4} />,
    ])
    const [filter, setFilter] = useState({
        location: "",
        household: false,
        income: 0,
        area: "",
        tags: [],
    })

    return (
        <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{
                base: 4,
                lg: 20,
            }}
            py={24}
            bg="white"
        >
            <Text fontSize="2xl" color="gray.600">
                {" "}
                {subHeading[step]}
            </Text>

            <chakra.h1
                mb={6}
                fontSize={{
                    base: "6xl",
                    md: "6xl",
                    lg: "7xl",
                }}
                fontWeight="bold"
                _dark={{
                    color: "black",
                }}
                lineHeight="shorter"
                fontFamily="Playfair Display"
            >
                {heading[step]}
            </chakra.h1>

            {input[step]}
        </Flex>
    )
}
