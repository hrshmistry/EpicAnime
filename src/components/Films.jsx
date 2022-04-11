import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Films = () => {
    const BaseURL = process.env.REACT_APP_BASE_URL;
    // const LIMIT = 50;

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get All Films
    const getFilms = async () => {
        // await axios.get(`${BaseURL}/films?limit=${LIMIT}`)
        await axios.get(`${BaseURL}/films`)
            .then((response) => {
                setFilms(response.data);
                setLoading(false);
            });
    }

    useEffect(() => {
        try {
            getFilms();
        } catch (error) {
            console.log("error: ", error);
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Grid>
            {loading
                ? <Loader />
                : films.map((film) => {
                    return (
                        <Film key={film.id} onClick={scrollToTop}>
                            <Link to={"/film/" + film.id}>
                                <ImgWrap>
                                    <img src={film.image} alt={film.title} />
                                </ImgWrap>
                                <h3>{film.title}</h3>
                            </Link>
                        </Film>
                    )
                })
            }
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 3rem 3rem;
`;

const ImgWrap = styled.div`
    cursor: pointer;
    overflow: hidden;
    border-radius: 0.5rem;

    &:hover {
        border-radius: 0.5rem;
        img {
            transform: scale(1.05);
            border-radius: 0.5rem;
        }
    }
`;

const Film = styled.div`
    cursor: pointer;
    overflow: hidden;
    
    img {
        width: 100%;
        border-radius: 0.5rem;
        transition: all 0.2s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }

    a{
        text-decoration: none;
        color: #334155;
    }

    h3 {
        text-align: center;
        padding: 0.5rem 1rem;
    }
`;

export default Films