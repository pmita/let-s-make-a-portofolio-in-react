import React from 'react';
//Let's import our styles
import styled from 'styled-components';
//Import react router links
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <Navigation>
            <h1 id="logo"><Link to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About us</Link>
                </li>
                <li>
                    <Link to="/work">2. Services</Link>
                </li>
                <li>
                    <Link to="/contact">3. FAQ</Link>
                </li>
            </ul>
        </Navigation>
    );
}

const Navigation = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background:  #282828;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        list-style: none;
        display: flex;
    }
    li{
        padding-left: 10rem;
        position: relative;

    }
    #logo{
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
`;

export default Nav;