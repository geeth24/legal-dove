import React, { useState } from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Text,
    chakra,
    Button,
    Input,
    InputGroup,
    VisuallyHidden,
    Box,
    InputRightElement,
} from "@chakra-ui/react"

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
            {/* <chakra.form w="full" mb={6}>
                <VisuallyHidden>Your Email</VisuallyHidden>
                <Box
                    display={{
                        base: "block",
                        lg: "none",
                    }}
                >
                    <Input
                        size="lg"
                        color="brand.900"
                        type="email"
                        placeholder="Enter your email..."
                        bg="white"
                    />
                    <Button
                        w="full"
                        mt={2}
                        color="white"
                        variant="solid"
                        colorScheme="brand"
                        size="lg"
                        type="submit"
                    >
                        Get Started
                    </Button>
                </Box>
                <InputGroup
                    size="lg"
                    w="full"
                    display={{
                        base: "none",
                        lg: "flex",
                    }}
                >
                    <Input
                        size="lg"
                        color="brand.900"
                        type="email"
                        placeholder="Enter your email..."
                        bg="white"
                    />
                    <InputRightElement w="auto">
                        <Button
                            color="white"
                            variant="solid"
                            colorScheme="brand"
                            size="lg"
                            type="submit"
                            roundedLeft={0}
                        >
                            Get Started
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </chakra.form> */}
            <chakra.p
                pr={{
                    base: 0,
                    lg: 16,
                }}
                mb={4}
                fontSize="sm"
                color="brand.600"
                _dark={{
                    color: "gray.400",
                }}
                letterSpacing="wider"
            >
                Get the #1 Business Messenger and start delivering personalized
                experiences at every stage of the customer journey.
            </chakra.p>
        </Flex>
    )
}
