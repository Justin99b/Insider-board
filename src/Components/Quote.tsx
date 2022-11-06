import React from "react";
import {Badge, Blockquote, Card, Group, Text} from "@mantine/core";
import {QuoteDto} from "../Dtos/QuoteDto";
import {Observer} from "mobx-react-lite";

interface QuoteComponentProps {
    quote: QuoteDto
}

export function QuoteComponent(props: QuoteComponentProps) {
    return <Observer>
        {() => (
            <Card shadow="md" radius="md">
                <Blockquote color="brand" cite={
                    <Group position='apart' mt='xs'>
                        <Group position="apart">
                            <Text>- {props.quote.name}</Text>
                            <Text>{props.quote.date.toDateString()}</Text>
                        </Group>
                        <Group position="right" spacing='xs'>
                            {props.quote.tags.map(text => {
                                return <Badge variant="filled">{text}</Badge>
                            })}
                        </Group>
                    </Group>
                }>
                    {props.quote.text}
                </Blockquote>
            </Card>
        )}
    </Observer>
}
