import Waec from '../../../images/waec.jpg';
import Neco from '../../../images/neco.png';
import Nbias from '../../../images/nbias.jpg';
import styled from 'styled-components';

export function Exams() {
  return (
    <ExamsBox>
      <Card>
        <img alt='example' height={'100%'} width={'100%'} src={Waec} />
        <Meta>
          <h4>WAEC</h4>
          <p>West African Examination Council</p>
        </Meta>
      </Card>
      <Card>
        <img alt='example' height={'100%'} width={'100%'} src={Neco} />
        <Meta>
          <h4>NECO</h4>
          <p>National Examination Council (NECO)</p>
        </Meta>
      </Card>
      <Card>
        <img alt='example' src={Nbias} width={'100%'} height={'100%'} />
        <Meta>
          <h4>NBAIS</h4>
          <p>National Board for Arabic and Islamic Studies (NBAIS)</p>
        </Meta>
      </Card>
    </ExamsBox>
  );
}

const Card = styled.div`
  background: #fff;
  /* border: 1px solid red; */
  border-radius: 10px;
  width: 240px;
  /* height: 200px; */
  margin: 10px auto;
  padding: 10px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 1px 1px 1px 0px lightgrey;
`;

const Meta = styled.div`
  /* background: coral; */
  text-align: center;
`;
const ExamsBox = styled.div`
  background: #1358c8;
  /* background: #fafafa */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 5rem 40px;
  margin: 10rem 10px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;
