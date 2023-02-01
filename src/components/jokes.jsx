import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../services/chuckService';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Popover from '@mui/material';

const ChuckNorris = () => {

    const [joke, setJoke] = useState('');

    
    const obtainJoke = () => {
        getRandomJoke()
            .then((r) => {
                console.log(r.data.value);
                setJoke(r.data.value)
            })
            .catch((error) => {
                alert(`Ha ocurrido un error: ${error}`)
            })
    }

    useEffect(() => {
        obtainJoke()
    }, []);




    return (
        <div className='container'>
            <h1>Chistes de Chuck Norris</h1>
            <Typography className='container'>"{joke}"</Typography>
            
            <div>
                <Button onClick={obtainJoke} variant="contained" >Generar chiste</Button>
            </div>
        </div>
    );
}

export default ChuckNorris;
