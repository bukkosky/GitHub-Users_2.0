
import styled from 'styled-components';
import { colors } from "../../utils/styles/color.style";

export const Container = styled.div`
    background: ${colors.dark};
    padding: 20px 0;
    a {
       color: ${colors.white};
       text-decoration: none;
       
       &:hover {
        color: ${colors.light}
       }
    }
`;
