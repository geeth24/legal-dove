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
    const [matches, setMatches] = useState([{}])

    const [count, setCount] = useState(0)

    return (
        <Flex display="flex" flexDirection="column">
            <Heading as="h2" fontFamily="Playfair Display" fontSize="36px">
                We found {data.length} programs that match your criteria
            </Heading>

            {data.map((item: any) => {
                if (item.state === filters.location) {
                    return <Card {...item} />
                }
            })}
        </Flex>
    )
}
