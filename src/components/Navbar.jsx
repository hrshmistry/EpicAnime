import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

                <Auth>
                    Log In
                </Auth>
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

export default Navbar