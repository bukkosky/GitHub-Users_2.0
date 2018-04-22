import React, { Component } from 'react';

// Config
import { githubConfig} from '../../config/config';

// Styles
import {
  Container,
  Content,
  ContentTop,
  ContentLeft,
  ContentCenter,
  ContentRight,
  EmptyUser,
} from './userDetails.style';

import { Wrapper } from '../../utils/styles/global.styles';

// Components
import Header from '../../components/header/header.components';
import Footer from '../../components/footer/footer.components';

class UserDetails extends Component {
    state = {
      details: {},
    };
  
    componentDidUpdate() {
      console.log(this.state);
    }
  
    componentDidMount() {
      fetch(
        githubConfig.apiUrl +
        '/users/' +
        this.props.match.params.userLogin +
        '?client_id=' +
        githubConfig.clientId +
        '&client_secret=' +
        githubConfig.clientSecret
      )
        .then(response => response.json())
        .then(data => this.setState({
          details: data,
        }));
    };
    
    render() {
      const userDetails = this.state.details;
      return (
        <Container>
          <Header/>
  
          <Wrapper>
            {userDetails.login ? <Content>
              <ContentTop>
                <span>User Login: </span>{userDetails.login}
              </ContentTop>
              <ContentLeft>
                <img src={userDetails.avatar_url} />
              </ContentLeft>
              <ContentCenter>
                repository url: {userDetails.repos_url}
              </ContentCenter>
              <ContentRight>
                email: {userDetails.email}
              </ContentRight>
            </Content> : <EmptyUser>Brak usera</EmptyUser>}
          </Wrapper>
          <Footer/>
        </Container>
      );
    }
  }

export default UserDetails;