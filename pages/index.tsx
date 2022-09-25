import { useColorModeValue } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
    const bg = useColorModeValue("#fff", "#1A202C")
    return (
        <div style={{ background: bg }}>
            <Head>
                <title>Legal Dove</title>
                <link rel="icon" href="/logo.svg"></link>
            </Head>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Home
