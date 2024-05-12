import HM from '../../images/hm.png';
import Adamu from '../../images/MalamAdamu.jpg';
import Abdulqadir from '../../images/abdulkadir.jpg';
import Aliyu from '../../images/aliyu.png';
import styled from 'styled-components';

const StaffRecords = [
  {
    id: 2,
    name: 'Malam Adamu',
    position: 'Staff',
    image: Adamu,
  },
  {
    id: 3,
    name: 'Malam Abdulqadir',
    position: 'Staff',
    image: Abdulqadir,
  },
  {
    id: 4,
    name: 'Sir Aliyu Jauro',
    position: 'Staff',
    image: Aliyu,
  },
];
function Staff() {
  return (
    <div style={{ margin: '6rem 0px' }}>
      <Header>Staff</Header>
      <Container>
        <BoardContainer>
          {StaffRecords.map((staff) => {
            return (
              <>
                <BoardCard src={staff.image}>
                  <div className='imageDiv' />
                  <div className='borad-info'>
                    <h2>{staff.name}</h2>
                    <strong>{staff.position}</strong>
                  </div>
                </BoardCard>
              </>
            );
          })}
        </BoardContainer>
      </Container>
    </div>
  );
}

export default Staff;

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

interface Props {
  src?: string;
}

const BoardCard = styled.div<Props>`
  border: 1px solid transparent;
  width: 300px;
  height: 420px;
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
