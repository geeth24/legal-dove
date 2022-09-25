import React from "react"

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
    return <div>Step5</div>
}
