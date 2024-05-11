import Sarki from '../../../images/sarki.jpeg';
import Atiku from '../../../images/atiku.jpg';
import styled from 'styled-components';
function Founders() {
  return (
    <>
      <div style={{ margin: '6rem 0px' }}>
        <Header>Founders</Header>
        <Container>
          <BoardContainer>
            <BoardCard src={Atiku}>
              <div className='imageDiv' />
              <div className='borad-info'>
                <h2>Alh Atiku Abubakar</h2>
                <strong>Founder</strong>
              </div>
            </BoardCard>
            <BoardCard src={Sarki}>
              <div className='imageDiv' />
              <div className='borad-info'>
                <h2>Alh Adamu Sanda Gangwari</h2>
                <strong>Founder</strong>
              </div>
            </BoardCard>
          </BoardContainer>
        </Container>
      </div>
    </>
  );
}

export default Founders;

interface BoardCardProps {
  src: string;
}
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h2`
  text-align: center;
  text-decoration: underline;
`;

const BoardContainer = styled.div`
  /* display: inline-flex; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  /* line-height: 18px; */
`;

const BoardCard = styled.div<BoardCardProps>`
  border: 1px solid transparent;
  width: 400px;
  height: 480px;
  margin: 15px;
  border-radius: 5px;
  padding: 10px 10px;
  position: relative;
  box-shadow: 4px 3px 11px -6px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .imageDiv {
    height: 80%;
    width: 100%;
    background-image: url(${(props) => props.src || ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 4;
  }

  .borad-info {
    font-size: small;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    strong {
      position: absolute;
      right: 0;
      bottom: 0px;
      color: #fff;
      border-radius: 12px 0px 5px 0px;
      background: #124596;
      padding: 3px;
      width: 100px;
      text-align: center;
    }
  }
`;
