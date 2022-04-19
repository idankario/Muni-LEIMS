import { Button, Input, TextField, Snackbar, Alert } from '@mui/material';
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

  const [area, setArea] = useState('')

  async function handleFileInput(file) {
    setApiRes(null)
    setImage(null)
    setLoading(true)
    const result = await Api.uploadImage(file, area)
    setLoading(false)
    // setImage(result.image)
    setApiRes(`Found `)
  }
  const [selectedFile, setSelectedFile] = useState('')
  const [img, setImage] = useState()
  const [apiRes, setApiRes] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <>
    <h1 style={{textAlign: 'center', fontSize: '3em', marginTop: '20px'}}>Upload Image</h1>
    <Container display="flex" style={{flexDirection: 'column', gap: '10px', width: '25vw', margin: 'auto'}}>
    <TextField id="standard-basic" label="Area name" variant="standard" onChange={(e) => setArea(e.target.value)} />

        <Button
        disabled={area ? false: true}
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
          
          <h2>Image uploaded and will be scanned...</h2>
        </ResContainer>
      }
      
    </>
  );
}
