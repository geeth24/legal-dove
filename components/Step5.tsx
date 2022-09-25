import React, { useState } from "react"
import { Flex, Heading } from "@chakra-ui/react"
import Card from "./Card"

interface step5Props {
    data: any
    filters: {
        location: string
        household: boolean
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step5({ data, filters }: step5Props) {
    console.log(data)
    const [matches, setMatches] = useState([
        {
            name: "Loading...",
            description: "Loading...",
            location: "Loading...",
            tags: ["Loading..."],
            link: "Loading...",
        },
    ])
    return (
        <Flex display="flex" flexDirection="column">
            <Heading as="h2">
                We found x matching legal service providers.
            </Heading>
            {data.map((provider: any) => {
                if (
                    provider.location === filters.location &&
                    provider.inclusions.includes(filters.area)
                ) {
                    matches.push(provider)
                }
            })}
        </Flex>
    )
}
