import React from 'react';

import { Container ,Header,BackIcon,ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>
        <ProfileInfo>
          <strong>Rafael Ramires</strong>
          <span>612 tweets</span>
        </ProfileInfo>
        {/* <ProfilePage/> */}
        {/* <BottomMenu>
          <HomeIcon/>
          <SearchIcon/>
          <BellIcon/>
          <EmailIcon/>
        </BottomMenu> */}
      </Header>
    </Container>
  );
}

export default Main;