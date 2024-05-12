import Waziri from '../../../images/waziri.jpg';
import Avatar from '../../../images/male_avatar.svg';
import styled from 'styled-components';

function ManagementBoard() {
  return (
    <div style={{ margin: '4rem 0px' }}>
      <Header>Management Boards</Header>

      <Container>
        <BoardContainer>
          <BoardCard src={Waziri}>
            <div className='imageDiv' />
            <div className='borad-info'>
              <h2>Late Waziri</h2>
              <strong>Board Member</strong>
            </div>
          </BoardCard>

          <BoardCard src={Avatar}>
            <div className='imageDiv' />

            <div className='borad-info'>
              <h2>Late. Alh Iya Haske</h2>
              <strong>Board Member</strong>
            </div>
          </BoardCard>

          <BoardCard src={Avatar}>
            <div className='imageDiv' />
            <div className='borad-info'>
              <h2>Alh. Abdulkarim Imam Jada</h2>
              <strong>Board Member</strong>
            </div>
          </BoardCard>

          <BoardCard src={Avatar}>
            <div className='imageDiv' />
            <div className='borad-info'>
              <h2>Muhammad Modibbo Babbawa Ganye</h2>
              <strong>Board Member</strong>
            </div>
          </BoardCard>
          <BoardCard src={Avatar}>
            <div className='imageDiv' />
            <div className='borad-info'>
              <h2> Abubakar Garba Toungo</h2>
              <strong>Board Member</strong>
            </div>
          </BoardCard>
        </BoardContainer>
      </Container>
    </div>
  );
}

export default ManagementBoard;

interface BoardCardProps {
  src: string; 
}

const Container = styled.div`
  width: 100%;
  overflow-x: scroll; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent cards from wrapping */
`;
const BoardContainer = styled.div`
  display: inline-flex;
  /* line-height: 18px; */
`;

const Header = styled.h2`
  text-align: center;
  text-decoration: underline;
  /* background-color: red; */
`;
const BoardCard = styled.div<BoardCardProps>`
  border: 1px solid transparent;
  width: 300px;
  height: 420px;
  margin: 15px;
  border-radius: 5px;
  padding: 10px 10px;
  position: relative;
  box-shadow: 4px 3px 11px -6px rgba(0, 0, 0, 0.75);
  /* background-color: coral; */

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
    text-align: center;
    h2 {
      white-space: pre-wrap; /* Prevent text wrapping */
    }
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
