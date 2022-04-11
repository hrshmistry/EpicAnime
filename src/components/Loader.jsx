import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    return (
        <Wrapper>Loading...</Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 100%;

    font-size: 1.5rem;
    font-weight: bold;
`;

export default Loader