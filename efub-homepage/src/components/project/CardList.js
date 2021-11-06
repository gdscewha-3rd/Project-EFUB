import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import cards from '../../assets/project/cards';

const CardBlock = styled(Responsive)`
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 1120px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Card = styled.div`
    position: relative;
    cursor: pointer;
    height: 16rem;
    width: 16rem;
`;

const CardImage = styled.img`
    position: absolute;
    height: 16rem;
    width: 16rem;
`;

const CardHover = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 16rem;
    width: 16rem;
    z-index: 99;
    display: flex;
    flex-direction: column-reverse;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Montserrat';
    padding-left: 1rem;
    padding-bottom: 1rem;
    background-color: black;
    opacity: 0;
    :hover{
        opacity: 0.45;
    }
`

const CardList = ({ select }) => {
    const [selectedCards, setSelectedCards] = useState(cards.all);

    useEffect(() => {
        setSelectedCards(cards[select]);
    }, [select]);

    return (
        <CardBlock>
            {selectedCards.map(s => (
                <Card>
                    <CardImage src={s.file} alt={s.file} />
                    <CardHover>{s.name}</CardHover>
                </Card>
            ))}
        </CardBlock>
    );
};

export default CardList;
