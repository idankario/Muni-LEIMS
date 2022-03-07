import React, { useState } from 'react';
import { sidebarConfig } from './sidebarConfig';
import { Header,Button,Menu } from '../component/util/board';
const HomePage = () => {

  return (
    <>

      <Header>
      <a href='#'><span>Muni-LEIMS</span></a>
   
      </Header>
      <Menu>
        <h2>Menu:</h2>
        <section>
        {sidebarConfig.map((navigation) => (
          <Button key={navigation.title} sx={{ width: '100%' }}>
              <h2>{navigation.title} </h2>
          </Button>
        ))}
        </section>
        </Menu>
    

    </>
  );
};
export default HomePage;
