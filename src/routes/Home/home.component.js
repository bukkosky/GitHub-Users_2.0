import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import {
    Container,
    UserLoginBox,
    UserInput,
    UserButton,
    UsersContainer
} from './home.style';

import { Wrapper } from '../../utils/styles/global.styles';

// Components
import Header from '../../components/header/header.components';
import Footer from '../../components/footer/footer.components';

class Home extends Component {
    state = {
        users: [],
        userValue: '',
    };

    addNewUser = () => {
        this.setState({
            users: [...this.state.users, this.state.userValue],
            userValue: '',
        });
    };

    userOnChange = (event) => {
        this.setState({userValue: event.target.value});
    };

    renderUsers = () => this.state.users.map((item) =>
        <div>
            <Link to={`/user/${item}`}>
                {item}
            </Link>
        </div>
    );

    render() {
        return (
            <Container>
                <Header/>

                <Wrapper>
                    <UserLoginBox>
                        <div>Please add GitHub user name to observable.</div>
                        
                        <UserInput value={this.state.userValue} onChange={this.userOnChange} />

                        <UserButton onClick={this.addNewUser}>
                            Add user
                        </UserButton>

                    </UserLoginBox>

                    <UsersContainer>
                        {this.renderUsers()}
                    </UsersContainer>
                </Wrapper>

                <Footer/>
            </Container>
        );
    }
}

export default Home;