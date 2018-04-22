import styled from 'styled-components';
import { colors } from '../../utils/styles/color.style';


export const Container = styled.div`
  img {
    max-width: 150px;
  }
`;

export const Content = styled.div`
   display: grid;
   grid-gap: 20px;
   grid-template-columns: 200px auto 250px;
   grid-template-areas: "header  header  header" "sidebar content sidebar2";
`;

export const ContentTop = styled.div`
  border-bottom: 1px solid ${colors.dark};
  color: ${colors.dark};
  grid-area: header;
  font-weight: bold;
  text-align: center;
  font-size: 28px;
  padding: 20px 0
  
  span{
    font-weight: 300;
  }
`;

export const ContentLeft = styled.div`
  grid-area: sidebar;
`;

export const ContentRight = styled.div`
  color: ${colors.dark};
  grid-area: sidebar2;
`;

export const ContentCenter = styled.div`
  color: ${colors.dark};
  grid-area: content;
`;

export const EmptyUser = styled.div`
  border: 1px solid ${colors.dark};
  border-radius: 2.5px;
  color: ${colors.dark};
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  width: 500px
`;