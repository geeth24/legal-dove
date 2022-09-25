import type { NextPage } from "next"
import Head from "next/head"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Legal Dove</title>
                <link rel="icon" href="/logo.svg"></link>
            </Head>
            <Navbar />
            <Hero />
        </>
    )
}

export default Home
