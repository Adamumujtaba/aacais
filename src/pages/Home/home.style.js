import styled from 'styled-components';

export const HeroSection = styled.div`
  /* background: coral; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
  max-width: 1440px;
  margin: auto;
  h1 {
    padding-bottom: 0.61rem;
    color: #184ca0;
    font-weight: bold;
    font-size: x-large;
  }
  @media screen and (max-width: 670px) {
    flex-direction: column;
    height: auto;

    h3 {
      font-size: 1.5rem;
      margin-top: 40px;
    }
  }
`;

export const Div = styled.div`
  width: 40%;
  padding: 0px 20px;
  margin: auto;
  text-align: justify;
  @media screen and (max-width: 670px) {
    width: 90%;
    margin-top: 7rem;
  }
`;
