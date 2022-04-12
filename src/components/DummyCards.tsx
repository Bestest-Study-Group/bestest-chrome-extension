import React, { ReactElement, useEffect, useState } from 'react'
import CardRow from '../templateComponents/CardRow'
import Card from '../templateComponents/Card/Card'

function DummyCards() {
    const [cards, setCards] = useState(new Array<ReactElement>())
    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            setCards(prev => [...prev,
                <Card key={i}>
                    <h1>Hello {i}</h1>
                </Card>

                ]
            )
        }
        console.log(cards)
    }, [])

    return (
        <CardRow>
           {cards}
        </CardRow>

    )
}
export default DummyCards