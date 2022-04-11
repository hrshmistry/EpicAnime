import React from 'react'
import styled from 'styled-components'
import Films from '../components/Films';

const Home = () => {
    return (
        <>
            <Head>
                <h1>All 22 Studio Ghibli Movies</h1>
                <p>Studio Ghibli Inc. is a Japanese animation film studio headquartered in Koganei, Tokyo. It is best known for its animated feature films, and has also produced several short subjects, television commercials, and two television films.</p>
            </Head>
            <Films />
        </>
    )
}

const Head = styled.div`
    padding: 2rem 0;
    max-width: 550px;

    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.2rem;
        padding-block: 1rem;
    }
`;

export default Home