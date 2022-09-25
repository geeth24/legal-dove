import {
    Box,
    Button,
    Link,
    Heading,
    chakra,
    CloseButton,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    useDisclosure,
    VStack,
    Divider,
    Image,
} from "@chakra-ui/react"
import React from "react"
import { IoLanguage } from "react-icons/io5"

const Navbar = () => {
    const bg = useColorModeValue("white", "gray.800")
    const mobileNav = useDisclosure()

    return (
        <React.Fragment>
            <chakra.header
                // bg={bg}
                position="fixed"
                top={0}
                w="full"
                px={{
                    base: 3,
                    sm: 8,
                }}
                py={6}
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mx="auto"
                >
                    <Flex>
                        <chakra.a
                            href="/"
                            title="Legal Dove"
                            display="flex"
                            alignItems="center"
                        ></chakra.a>
                        {/* <chakra.h1
                            fontSize="xl"
                            fontWeight="900"
                            ml="2"
                            color="black"
                            fontFamily="Playfair Display"
                        >
                            Legal Dove
                        </chakra.h1> */}
                        <Image src="/logo.svg" alt="Logo" width="200px"/>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="brand.500"
                            display={{
                                base: "none",
                                md: "inline-flex",
                            }}
                        ></HStack>
                        <Button
                            size="large"
                            variant="ghost"
                            fontSize="2xl"
                            _hover={{ bg: "" }}
                        >
                            Help
                        </Button>

                        <IoLanguage fontSize="30px" />
                        <Box
                            display={{
                                base: "inline-flex",
                                md: "none",
                            }}
                        >
                            <IconButton
                                display={{
                                    base: "flex",
                                    md: "none",
                                }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="gray.800"
                                _dark={{
                                    color: "inherit",
                                }}
                                variant="ghost"
                                // icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    )
}

export default Navbar
