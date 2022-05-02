import styled from '@emotion/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Button = styled.button`
    position: absolute;
    left: 25px;
    bottom: 25px;
    font-size: 1.5em;
    display: grid;
    place-items: center;
    padding: 2px;
    border-radius: 50%;
    font-weight: bold;
    cursor: pointer;
    background-color: #7BD529;
    border: none;
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.2);
    }
`

function BackButton({path}) {
    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate(path)}>
            <BsFillArrowLeftCircleFill 
                style={{color: 'white', background: '#7BD529', fontSize: '1.5em', padding: '7px', borderRadius: '50%'}} 
            />
        </Button>
    )
}

export default BackButton