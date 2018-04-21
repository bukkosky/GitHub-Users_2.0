
import styled from 'styled-components';
import {colors} from "../../utils/styles/color.style";



export const Container = styled.div`
    color: ${colors.light};
    font-size: 10px;
    margin-top: 20px;    
    text-align: center;
    
    & > div {
        border-top: 1px solid ${colors.light}
        padding: 5px 0; 
    }
    
`;
