import React, { Component } from 'react';
import { Container, UserLoginBox, UserButton, UserInput } from "./home.style";
import { Wrapper } from "../../utils/styles/global.styles";
import Header from "../../components/header/header.components";
import Footer from "../../components/footer/footer.components";



class Home extends Component {
    state = {
        users: [],
        userValue: ''
    };

    addNewUser = () => {
        console.log(this.state.userValue);
        this.setState({
            users: [...this.state.users, this.state.userValue],
            userValue: ''
        })
    };

    userOnChange = (event) => {
        this.setState({userValue: event.target.value});
    };

    render() {
        return (
            <Container>
                <Header />

                <Wrapper>
                    <UserLoginBox>
                        <div>Please add GitHub user name to observable</div>
                        <UserInput value={this.state.userValue} onChange={this.userOnChange}/>
                        <UserButton onClick={this.addNewUser}>
                            Add User
                        </UserButton>
                    </UserLoginBox>
                </Wrapper>

                <Footer />
            </Container>
        );
    }
}

export default Home;
