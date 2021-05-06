import React from 'react';
//Let's import our styles
import styled from 'styled-components';

const Nav = () => {
    return(
        <Navigation>
            <h1 id="logo"><a href="#">Capture</a></h1>
            <ul>
                <li>
                    <a href="#">1. About us</a>
                </li>
                <li>
                    <a href="#">2. Services</a>
                </li>
                <li>
                    <a href="#">3. FAQ</a>
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