import { Button, Input } from '@mui/material';
import React from 'react';
import { useState } from 'react'
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import * as Api from '../Api'


const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vh;
`

const ResContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function ImageUpload() {
  async function handleFileInput(file) {
    setApiRes(null)
    setImage(null)
    setLoading(true)
    const result = await Api.uploadImage(file)
    setLoading(false)
    setImage(result.image)
    setApiRes(`Found ${result.data.predictions.length} poles`)
  }
  const [selectedFile, setSelectedFile] = useState('')
  const [img, setImage] = useState()
  const [apiRes, setApiRes] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <>
    <h1 style={{textAlign: 'center', fontSize: '3em', marginTop: '20px'}}>Upload Image</h1>
    <Container>
        <Button
          variant="contained"
          component="label"
          style={{textAlign: 'center'}}
        >
          Upload Image
          <input type="file" accept='image/*' hidden
            onChange={(e) => handleFileInput(e.target.files[0])}
          />
        </Button>
      </Container>
      {loading &&
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', 'height': '45vh'}}>
          <CircularProgress />
        </div>
      }
      {apiRes && 
        <ResContainer>
          
        <img src={`data:image/jpeg;base64,${img}`} width="340px" height="340px" />
        <p style={{fontSize: '2em', marginTop: '10px'}}>{apiRes}</p>
        </ResContainer>
      }
      
    </>
  );
}
