import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi'

const Navbar = () => {
    return (
        <NavBackground>
            <Nav className="mx1000-auto">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h1 className='brand-logo'>Epic Anime</h1>
                </Link>

                <MoreLinks>
                    <ul>
                        <li>TV Shows</li>
                        <li>Movies</li>
                        <li>Clips</li>
                        <li>Characters</li>
                    </ul>
                </MoreLinks>

                <NavRight>
                    <BiSearchAlt />
                    <Auth>
                        Log In
                    </Auth>
                </NavRight>
            </Nav>
        </NavBackground>
    )
}

const NavBackground = styled.nav`
    background-color: #dce3e7;
    position: sticky;
    top: 0;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    flex-wrap: wrap;
    background-color: #dce3e7;
`;

const MoreLinks = styled.div`
    ul {
        display: flex;
        gap: 1rem;
        color: #64748b;
        font-weight: 600;
    }
    li {
        list-style: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        font-size: large;

        &:hover {
            color: #0f172a;
        }
    }

    @media (max-width: 750px) {
        display: none;
    }
`;

const Auth = styled.div`
    color: #0f172a;
    font-weight: 600;    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;

const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        font-size: 1.3rem;
        cursor: pointer;
        margin-top: 0.2rem;
        transition: all 0.2s ease-in-out;

        &:hover { 
            color: #0f172a;
            transform: scale(1.1);
        }
    }
`;

export default Navbar