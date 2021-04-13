import React from 'react';

import { 
  Container ,
  Header, 
  BackIcon,
  ProfileInfo,
  // ProfilePage,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon
} from './styles';


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
      </Header>
        {/* <ProfilePage/> */}
        <BottomMenu>
          <HomeIcon className="active"/>
          <SearchIcon/>
          <BellIcon/>
          <EmailIcon/>
        </BottomMenu>
      
    </Container>
  );
}

export default Main;