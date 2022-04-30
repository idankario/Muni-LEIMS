import React from 'react';
import sidebarConfig from './sidebarConfig';
import { Header, Button, Menu } from 'components/util/board';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <Header>
        <a href="/#">
          <span>Muni-LEIMS</span>
        </a>
      </Header>
      <Menu>
        <h2>Menu:</h2>
        <section>
          {sidebarConfig.map((navigation) => (
            <Button 
                onClick={() => navigate(navigation.path)} 
                key={navigation.title} 
                sx={{ width: '100%' }}
            >
              <h2>{navigation.title} </h2>
            </Button>
          ))}
        </section>
      </Menu>
    </>
  );
}
export default HomePage;
