import React from "react"

interface step4Props {
    filters: {
        location: string
        household: string
        income: number
        area: string
        tags: Array<string>
    }
}

export default function Step4({ filters }: step4Props) {
    return <div>step4</div>
}
