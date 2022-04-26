import { Button, Input, TextField, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import * as Api from 'Api'
import { Header } from 'components/util/board'
import BackButton from 'components/BackButton';
import BackgroundImage from 'components/images/login.svg'
import { css } from '@emotion/react';

const PageMain = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${BackgroundImage}) no-repeat;
  height: calc(100vh - 60px);
  width: 100vw;
  display: grid;
  place-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  max-width: 35vw;
  height: 90%;
  padding: 0 25px;
  position: relative;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3em;
  margin-top: 20px;
`




export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState('')

  const [area, setArea] = useState({ city: '', area: '', consumption: '' })
  const [data, setData] = useState({
    res: { error: false, text: '' },
    loading: false,
  })

  async function upload(file) {
    setData({ ...data, loading: true })
    const res = await Api.uploadImage(file, area.city, area.area, area.consumption)
    setArea({ city: '', area: '', consumption: '' })
    setData({ ...data, loading: false })

    if (res.ok) setData({ ...data, res: { error: false, text: `Image uploaded and will be scanned...` } })
    else setData({ ...data, res: { error: true, text: `Server error` } })
  }

  async function fileHandler(file) {
    Object.keys(area).forEach(i =>
      area[i] = area[i].toLowerCase()
    )
    upload(file)
  }

  return (
    <>
      <Header>
        <a href="/#">
          <span>Muni-LEIMS</span>
        </a>
      </Header>
      <PageMain>
        {
          !data.loading &&
          <Container>
            <Title>Upload Image</Title>
            <TextField autoComplete='off' value={area.city} id="standard-basic" label="City" variant="standard"
              onChange={(e) => setArea(prev => ({ ...area, city: e.target.value }))}
            />
            <TextField autoComplete='off' value={area.area} id="standard-basic" label="Area" variant="standard"
              onChange={(e) => setArea(prev => ({ ...area, area: e.target.value }))}
            />
            <TextField autoComplete='off' value={area.consumption} id="standard-basic" label="Consumption" variant="standard"
              onChange={(e) => setArea(prev => ({ ...area, consumption: e.target.value }))}
            />

            <Button
              disabled={Object.values(area).some(i => i === null) ? true : false}
              variant="contained"
              component="label"
              style={{ textAlign: 'center', marginTop: '7px' }}
            >
              Upload Image
              <input type="file" accept='image/*' hidden
                onChange={(e) => fileHandler(e.target.files[0])}
              />
            </Button>
            {
              data.res.text
              &&
              <Alert
                style={{ bottom: '25px', position: 'absolute' }}
                onClose={() => setData({ ...data, res: { error: false, text: '' } })}
                severity={data.res.error ? "error" : 'success'}
              >
                {data.res.text}
              </Alert>
            }
          </Container>
        }
        {
          data.loading && <CircularProgress style={{color: 'yellow'}}/> 
        }
        <BackButton path='/homePage' />
      </PageMain>
    </>
  )
}