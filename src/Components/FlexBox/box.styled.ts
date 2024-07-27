import styled from 'styled-components';

interface Props {
  reverse?: boolean;
}

export const FlexBox = styled.main<Props>`
  /* width: 100%; */
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${(props: Props) => (props.reverse ? `row-reverse` : `row`)};
  min-height: 80vh;
  padding: 0px 20px;
  background: ${(props: Props) => (props.reverse ? `#184ca0` : ``)};
  color: ${(props: Props) => (props.reverse ? `#fff` : ``)};

  a {
    color: ${(props: Props) => (props.reverse ? `#fff` : ``)};
  }
  div {
    width: 40%;
    margin: 40px auto;
    text-align: justify;
    height: auto;
  }

  h2 {
    padding-bottom: 0.61rem;
    color: ${(props: Props) => (props.reverse ? `#fff` : `#184ca0`)};
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
    height: auto;
    flex-direction: ${(props: Props) => (props.reverse ? `column-reverse` : `column`)};
    h2 {
      padding-top: 2.61rem;
      font-size: 1.5rem;
      margin: 20px 0px;
    }
    div {
      width: 90%;
      height: auto;
      /* background: red; */
    }
  }
`;
