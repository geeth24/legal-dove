import {
    Box,
    SimpleGrid,
    Flex,
    Badge,
    chakra,
    VisuallyHidden,
    Input,
    Button,
    InputGroup,
    InputRightElement,
    Image,
    Text,
    Divider,
    HStack,
} from "@chakra-ui/react"
import React from "react"
import Form from "./Form"

const Hero = () => {
    return (
        <SimpleGrid
            columns={{
                base: 1,
                md: 2,
            }}
            spacing={0}
            _after={{
                bg: "white",
                opacity: 0.25,
                pos: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: -1,
                content: '" "',
            }}
            height="100vh"
        >
            <Form />
            <Box bg="#E9F2FF">
                <Image
                    src="/woman.png"
                    alt="Women"
                    fit="cover"
                    w="full"
                    h={{
                        base: 64,
                        md: "full",
                    }}
                
                    loading="lazy"
                />
            </Box>
        </SimpleGrid>
    )
}

export default Hero
