import React from "react"
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
    AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete"
import { HStack, Button } from "@chakra-ui/react"
import { BsArrowRight } from "react-icons/bs"

interface step4Props {
    filters: {
        location: string
        household: string
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step4({ filters }: step4Props) {
    const tags = ["I prefer Spanish", "I'm a minor", "I'm seeking asylum"]
    return (
        <HStack spacing="24px">
            <AutoComplete
                openOnFocus
                multiple
                onChange={(vals) => console.log(vals)}
            >
                <AutoCompleteInput variant="filled">
                    {({ tags }) =>
                        tags.map((tag, tid) => (
                            <AutoCompleteTag
                                key={tid}
                                label={tag.label}
                                onRemove={tag.onRemove}
                            />
                        ))
                    }
                </AutoCompleteInput>
                <AutoCompleteList>
                    {tags.map((tag, tid) => (
                        <AutoCompleteItem
                            key={`option-${tid}`}
                            textTransform="capitalize"
                            _selected={{ bg: "whiteAlpha.50" }}
                            _focus={{ bg: "whiteAlpha.100" }}
                            value={tag}
                        >
                            
                        </AutoCompleteItem>
                    ))}
                </AutoCompleteList>
            </AutoComplete>
            <Button colorScheme="brand" variant="solid" >
                <BsArrowRight />
            </Button>
        </HStack>
    )
}
