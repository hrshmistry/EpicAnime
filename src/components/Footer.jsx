import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <>
            <FooterStyled>
                <InsideFooter className='mx1000-auto'>
                    <div>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <h1 className='brand-logo'>Epic Anime</h1>
                        </Link>
                        <AllSections>
                            <Section>
                                <h4>COMPANY</h4>
                                <ul>
                                    <li>About Us</li>
                                    <li>Our Team</li>
                                    <li>Podcast Network</li>
                                    <li>Customer Service</li>
                                    <li>Subscribe</li>
                                    <li>Events</li>
                                    <li>Press</li>
                                    <li>Jobs</li>
                                    <li>Apps</li>
                                    <li>Affiliate Program</li>
                                    <li>Sitemap</li>
                                </ul>
                            </Section>
                            <Section>
                                <h4>CATEGORIES</h4>
                                <ul>
                                    <li>Watch Together for Older Kids</li>
                                    <li>Get In On the Action</li>
                                    <li>International TV Shows</li>
                                    <li>Young Adult Movies & Shows</li>
                                    <li>Futuristic Sci-Fi</li>
                                    <li>Registry</li>
                                    <li>Anime Series</li>
                                    <li>Emotional Movies</li>
                                    <li>Supernatural TV Shows</li>
                                    <li>Exciting TV Shows</li>
                                    <li>International Movies</li>
                                    <li>Teen TV Shows</li>
                                    <li>Romantic TV Shows</li>
                                </ul>
                            </Section>
                            <Section>
                                <h4>QUICK LINKS</h4>
                                <ul>
                                    <li>Home</li>
                                    <li>Top Shows</li>
                                    <li>Top Movies</li>
                                    <li>Watchlist</li>
                                    <li>Get Help</li>
                                    <li>Download App</li>
                                </ul>
                            </Section>
                        </AllSections>
                    </div>

                    <NewsLetter>
                        <h3>Sign up for our newsletter</h3>
                        <div style={{ maxWidth: "300px" }}>In your email, we'll send you our best Anime and TV Shows.</div>
                        <form onSubmit={(e) => { e.preventDefault() }}>
                            <input type="text" placeholder="hello@epic-anime.com" />
                            <button>SIGN UP</button>
                        </form>
                    </NewsLetter>
                </InsideFooter>
            </FooterStyled>
            <Right>©2022 <b>Epic Anime</b> Terms | Privacy | Code of Conduct | Accessibility Policy</Right>
        </>
    )
}

const Right = styled.div`
    text-align: center;
    background-color: #dce3e7;
    padding: 3rem 1rem 1rem 1rem;
    color: #334155;
`;

const FooterStyled = styled.div`
    display: flex;
    background-color: #DCE3E7;
    padding: 2rem 1rem;
    margin-top: 10rem;
`;

const AllSections = styled.div`
   display: flex;
   padding: 2rem 1rem;
   gap: 3rem;
   border-right: 2px solid #334155;
   padding-right: 4rem;
   flex-wrap: wrap;
   padding-left: 0;

   @media (max-width: 1000px) {
      border-right: none;
   }
`;

const Section = styled.div`
    h4{
        margin-bottom: 1rem;
        color: #334155;
    }

    ul {
        list-style: none;
    }
    
    li {
        margin-bottom: 0.5rem;
        cursor: pointer;
        width: fit-content;
        border-bottom: 2px solid transparent;

        &:hover {
            border-bottom: 2px solid #0f172a;
            color: #0f172a;
        }
    }
`;

const InsideFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;

    @media (max-width: 1000px) {
        flex-direction: column;
    }

    @media (max-width: 666px) {
        align-items: flex-start;
        padding-inline: 0;
    }
`;

const NewsLetter = styled.div`
    h3 {
        color: #334155;
        margin: 0.5rem 0;
    }

    form {
        margin: 1rem 0;
        width: 100%;
    }

    input {
        background-color: #fff;
        border: none;
        outline: none;
        padding: 1rem;
    }

    button {
        background-color: #334155;
        border: none;
        outline: none;
        color: #fff;
        padding: 1rem;
        cursor: pointer;
    }
`;

export default Footer