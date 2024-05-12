import Waziri from '../../../images/waziri.jpg';
import Avatar from '../../../images/male_avatar.svg';
import SaniJada from '../../../images/sani_jada.jpeg';
import HM from '../../../images/hm.png';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { IoArrowForward } from 'react-icons/io5';

function ManagementBoard() {
  const sliderRef = useRef(null);

  const boardMembers = [
    {
      name: 'Walin Ganye Alh.Sadiq Mohammad',
      role: 'Board Member',
      image: Avatar,
    },
    { name: 'Alh. Sani Jada', role: 'Board Member', image: SaniJada },
    { name: "Malam Kabiru Sa'ad", role: 'Co-ordinator', image: HM },
    { name: 'Late Waziri', role: 'Board Member', image: Waziri },
    { name: 'Late. Alh Iya Haske', role: 'Board Member', image: Avatar },
    { name: 'Alh. Abdulkarim Imam Jada', role: 'Board Member', image: Avatar },
    {
      name: 'Muhammad Modibbo Babbawa Ganye',
      role: 'Board Member',
      image: Avatar,
    },
    { name: 'Abubakar Garba Toungo', role: 'Board Member', image: Avatar },
    { name: 'Alh. Idris Sulaiman', role: 'Board Member', image: Avatar },
    { name: "Modibbo Sa'adu", role: 'Board Member', image: Avatar },
    { name: 'Alh. Dan Azumi', role: 'Board Member', image: Avatar },
    {
      name: 'Sec. Traditional Council Ganye',
      role: 'Board Member',
      image: Avatar,
    },
    // Add more board member data as needed
  ];
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const scrollLeft = () => {
    setActiveImageIndex(
      !activeImageIndex ? boardMembers.length - 1 : activeImageIndex - 1
    );
  };
  const scrollRight = () => {
    setActiveImageIndex((activeImageIndex + 1) % boardMembers.length);
  };

  useEffect(() => {
    const sliderTimer = setTimeout(() => {
      scrollRight();
    }, 3000);

    return () => clearTimeout(sliderTimer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImageIndex]);
  return (
    <div style={{ margin: '4rem 0px' }}>
      <Header>Management Boards</Header>

      <Container>
        <Button className='left' onClick={scrollLeft}>
          <BiArrowBack />
        </Button>
        <BoardContainer ref={sliderRef}>
          {boardMembers.map((member, index) => (
            <BoardCard
              key={index}
              src={member.image}
              className={` ${activeImageIndex === index ? 'show' : 'hide'}`}
            >
              <div className='imageDiv' />
              <div className='borad-info'>
                <h2>{member.name}</h2>
                <strong>{member.role}</strong>
              </div>
            </BoardCard>
          ))}
        </BoardContainer>
        <Button className='right' onClick={scrollRight}>
          <IoArrowForward />
        </Button>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* background: green; */
`;
const BoardContainer = styled.div`
  display: inline-flex;
  transition: all 0.5s ease;
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
`;

const Header = styled.h2`
  text-align: center;
  text-decoration: underline;
`;
const BoardCard = styled.div<BoardCardProps>`
  border: 1px solid transparent;
  width: 400px;
  height: 460px;
  margin: 15px;
  border-radius: 5px;
  padding: 10px 10px;
  position: relative;
  flex: 0 0 auto;
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
  @media screen and (max-width: 760px) {
    min-width: 300px;
    width: 100%;
    height: 420px;
    margin: 0;
    margin-top: 3rem;
    padding: 0px 10px;
  }
`;

const Button = styled.button`
  all: unset;
  /* background-color: #007bff; */
  /* color: #fff; */
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  z-index: 7;
  .left {
    position: absolute;
    left: 0;
  }
  .right {
    position: absolute;
    right: 0;
  }

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;
