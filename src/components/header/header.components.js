import React, { Component } from 'react';
import { Container, Head } from './header.style';
import { Wrapper } from "../../utils/styles/global.styles";

class Header extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <a href="#">GitHub Users Example App</a>
                </Wrapper>
            </Container>
        );
    }
}

export default Header;