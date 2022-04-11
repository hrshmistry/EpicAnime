import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <Head>
                <h1>Anime</h1>
                <p>Action-packed adventures, offbeat comedies, inspirational stories -- these anime movies and TV shows have a style and spirit unlike anything else.</p>
            </Head>
        </>
    )
}

const Head = styled.div`
    padding: 2rem 0;
    max-width: 550px;

    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 1.2rem;
    }
`;

export default Home