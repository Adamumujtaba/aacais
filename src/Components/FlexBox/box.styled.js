import styled from 'styled-components';

export const FlexBox = styled.main`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${(props) => (props.reverse ? `row-reverse` : `row`)};
  /* background: ${(props) => (props.primary ? 'palevioletred' : 'white')}; */
  height: 80vh;
  padding: 0px 3rem;

  div {
    width: 40%;
    /* padding: 0px 20px; */
    /* margin: auto; */
    text-align: justify;
    height: auto;
  }
  h2 {
    padding-bottom: 0.61rem;
    color: #184ca0;
    font-weight: bold;
  }
  button {
    background: #11222ddd;
    width: 100px;
    border: 1px solid #ccc;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 20px 0px;
    cursor: pointer;
  }
  @media screen and (max-width: 670px) {
    /* flex-direction: column; */
    height: auto;
    /* background: red; */
    width: 95%;
    margin: auto;
    padding: 0px;
    flex-direction: ${(props) => (props.reverse ? `column-reverse` : `column`)};
    h2 {
      padding-top: 2.61rem;
      font-size: 1.5rem;
      margin: 20px 0px;
    }
    div {
      width: 90%;
      height: auto;
      margin: 3rem 20px;
    }
  }
`;
