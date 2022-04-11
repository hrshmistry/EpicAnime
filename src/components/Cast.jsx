import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Cast = ({ filmId }) => {
    const BaseURL = process.env.REACT_APP_BASE_URL;
    const [cast, setCast] = useState([]);

    const getFilmCast = async (id) => {
        await axios.get(`${BaseURL}/people`)
            .then((response) => {
                setCast(response.data.filter((cast) => cast.films[0].includes(filmId)));
            });
    }

    useEffect(() => {
        getFilmCast(filmId);
    }, [filmId])

    return (
        <>
            <Members>
                <h2>Cast :</h2>
                {cast.length !== 0
                    ? cast.map((person) => {
                        return <Person key={person.id}>
                            <span>{person.name}</span>
                        </Person>
                    })
                    : <Person>Not Known</Person>
                }
            </Members>
        </>
    )
}

const Members = styled.div`
    padding: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: -5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Person = styled.div`
    color: #334155;
    font-size: 1.2rem;    
    font-weight: 600;
    border-bottom: 1px solid black;
`;

export default Cast