import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import CardList from '../components/project/CardList';

const buttons = [
    {
        name: 'all',
        text: '전체'
    },
    {
        name: 'first',
        text: '1기'
    },
    {
        name: 'second',
        text: '2기'
    }
]

const Banner = styled.div`
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ButtonBlock = styled.div`
    margin-bottom: 2rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ProjectPage = () => {
    const [select, setSelect] = useState('all');

    return (
        <>
            <Banner>
                <h1>PROJECT</h1>
                <h3>개발자와 디자이너가 협업을 통해 만들어나갑니다.</h3>
            </Banner>
            <Main>
                <ButtonBlock>
                    {buttons.map(b => (
                        <Button
                            round blue
                            filled={b.name === select}
                            onClick={() => setSelect(b.name)}
                            style={{ marginRight: 15 }}
                        >
                            {b.text}
                        </Button>
                    ))}
                </ButtonBlock>
                <CardList select={select} />
            </Main>
        </>
    );
};

export default ProjectPage;