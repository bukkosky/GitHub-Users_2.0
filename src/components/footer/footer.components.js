import React, { Component } from 'react';

// Style
import { Container } from './footer.style';
import { Wrapper } from '../../utils/styles/global.styles';

class Footer extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    Copyright 2018
                </Wrapper>
            </Container>
        );
    }
}

export default Footer;