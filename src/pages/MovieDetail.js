import React, {useState, useEffect} from 'react';
//Import styled components
import styled from 'styled-components';
/*
    useHistory ussentially give you access to the current
    url that the use is at. We can use this to cross-reference 
    with our pages.
*/
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;

    //STATE
    const [movies, setMovies] = useState(MovieState);

    const [movie, setMovie] = useState(null);

    //useEffect
    useEffect( () => {
        const currentMovie = movies.filter( stateMovie => {
            if( stateMovie.url === url){
                return stateMovie;
            }
        });
        setMovie(currentMovie[0]);
    }, [movies, url]);

    return (
        <>
        {movie && (
        <Details>
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt='random' />
            </HeadLine>
            <Awards>
                {movie.awards.map( award => (
                    <Award 
                        title={award.title} 
                        description={award.description}
                        key={award.title}
                    />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt='random'/>
            </ImageDisplay>
        </Details>
        )}
        </>
    );
}

const Details = styled.div`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const AwardStyle= styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 50%;
        height: 0.5rem;
        margin: 1rem 0rem;
        background: #23d997;
    }
    p{
        padding: 2rem 0rem;
    }
`;

//Award component
export const Award = ({title, description}) => {
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>

    );
}

export default MovieDetail;