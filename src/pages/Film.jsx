import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Loader from '../components/Loader';

const Film = () => {
    const { id } = useParams();
    const BaseURL = process.env.REACT_APP_BASE_URL;

    const [film, setFilm] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFilmDetails = async (id) => {
        await axios.get(`${BaseURL}/films/${id}`)
            .then((response) => {
                setFilm(response.data);
                setLoading(false);
            });
    }

    useEffect(() => {
        try {
            getFilmDetails(id);
        } catch (error) {
            console.log("error: ", error);
        }
    }, [])

    return (
        <Wrapper>
            {loading
                ? <Loader />
                : <>
                    <BannerWrap>
                        <img src={film?.movie_banner} alt={film?.title + "'s Banner"} />
                        <Gradient />
                    </BannerWrap>
                    <MainDetails>
                        <img src={film?.image} alt={film?.title} />
                        <Info>
                            <FilmDetail>
                                <h1>{film?.title}</h1>
                                <h2>{film?.original_title}</h2>
                                <p>{film?.description?.slice(0, 400)}</p>
                            </FilmDetail>
                            <RestDetails>
                                <Rest>
                                    <h1>More Details</h1>
                                    <li>
                                        <span>Director: </span><small>{film?.director}</small>
                                    </li>
                                    <li>
                                        <span>Producer: </span><small>{film?.producer}</small>
                                    </li>
                                    <li>
                                        <span>Release Date: </span><small>{film?.release_date}</small>
                                    </li>
                                    <li>
                                        <span>Rotten Tomatoes Score: </span><small>{film?.rt_score}</small>
                                    </li>
                                    <li>
                                        <span>Runtime: </span><small>{film?.running_time} minutes</small>
                                    </li>
                                </Rest>
                            </RestDetails>
                        </Info>
                    </MainDetails>
                </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 30rem;

    @media (max-width: 850px) {
        margin-bottom: 60rem;
    }

`;

const BannerWrap = styled.div`
    position: relative;
    overflow: hidden;
    min-height: 550px;
    border-radius: 0.5rem;
    margin-block: 1rem;
    
    img {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;  
    }
`;

const Gradient = styled.div`
    position: absolute;
    border-radius: 0.5rem;

    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const MainDetails = styled.div`
    position: absolute;
    top: 15rem;
    left: 0;
    display: flex;
    gap: 2rem;
    padding: 2rem;
    z-index: 1;

    img {
        max-width: 280px;
        max-height: 420px;
        width: 100%;
        border-radius: 0.5rem;
        transition: all 0.2s ease-in-out;
        object-fit: cover;
        border: 5px solid #fff;
        border-radius: 0.8rem;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin-top: 2rem;
        color: #334155;
    }
`;

const FilmDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #fff;
    padding-inline: 1rem;
    height: max-content;

    p {
        font-size: 1.2rem;
        min-height: 100px;
    }

    @media (max-width: 850px) {
        color: #334155;
    }
`;

const RestDetails = styled.div`
    display: flex;
    gap: 2rem;
    padding: 1rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
`;

const Rest = styled.ul`
    line-height: 2rem;

    h1 {
        margin-bottom: 1rem;
    }

    li {
        list-style: none;
        display: flex;
        gap: 1rem;

        span {
            font-size: 1.5rem;
            font-weight: 600;
        }

        small {
            font-size: 1.5rem;
        }
    }
`;

export default Film