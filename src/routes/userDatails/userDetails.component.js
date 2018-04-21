import React, { Component } from 'react';
import { Container } from "./home.style";
import { Wrapper } from "../../utils/styles/global.styles";
import Header from "../../components/header/header.components";
import Footer from "../../components/footer/footer.components";



class UserDetails extends Component {


    render() {
        return (
            <Container>
                <Header />

                <Wrapper>

                </Wrapper>

                <Footer />
            </Container>
        );
    }
}

export default UserDetails;
