import Box from '../../Components/FlexBox/Box.tsx';
import Computer from '../../images/computer.jpg';
import scienceLap from '../../images/lap.svg';
import EduSvg from '../../images/edu.svg';
import SchImg from '../../images/inspection.jpg';
import SchImg1 from '../../images/break.jpg';
import SchImg2 from '../../images/computer3.jpg';

import Batch from '../../images/model.jpg';
import { Exams } from './components/examCard.tsx';
import Founders from './components/founders.tsx';
import ManagementBoard from './components/managementBoard.tsx';
import styled from 'styled-components';
import GeoLocation from './components/GeoLocation.tsx';
import { useState } from 'react';
import Footer from '../../Components/Footer/footer.tsx';
export function Home() {
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage('');
  };
  return (
    <>
      <>
        <Box
          header={'Atiku Abubakar Centre For Arabic and Islamic Studies'}
          body={
            <p>
              We are proud to offer a curriculum that combines both Western and
              Arabic education, providing our students with well rounded and
              culturally rich learning experience. Our students get knowledge
              that benefits them in this world and in the hereafter. It gives
              them a easy opportunity to have two wings which enable them to fly
              perfectly. Our curriculum trains them to be tolerant, responsible
              and functional Members of the Society
            </p>
          }
          imgUrl={EduSvg}
        />
      </>

      <div>
        <Exams />
      </div>

      <>
        <Box
          header={'Computer Lap'}
          body={
            <p>
              With the increasing reliance on technology in all aspects of life,
              having access to a computer lab is more important than ever
              before. Our lab is designed to support and enhance the learning
              experience of our students, helping them to build skills and
              confidence that will benefit them throughout their academic and
              professional careers. our record-keeping was automated through the
              use of{' '}
              <a href='https://flexisaf.com/' target='_blank' rel='noreferrer'>
                FlexiSaf Software
              </a>{' '}
              product{' '}
              <a href='https://srms.ng/' target='_blank' rel='noreferrer'>
                Student Record Management System (SRMS)
              </a>
              .
            </p>
          }
          imgUrl={Computer}
        />
      </>

      <>
        <Box
          header={'Science Lab'}
          body={
            <p>
              Our school is proud to announce that we have a state-of-the-art
              science laboratory to provide our students with hands-on and
              immersive experiences in the field of science. Equipped with
              modern equipment and resources, our laboratory is a place where
              students can explore, experiment and learn through practical
              applications of scientific concepts.
            </p>
          }
          imgUrl={scienceLap}
        />
      </>

      <>
        <Founders />
      </>

      <>
        <ManagementBoard />
      </>

      <Container className='carousel-cont'>
        <h2>Discover the warmth and camaraderie of our school community.</h2>
        <CarouselContainer className='gallery'>
          <Carousel onClick={() => handleImageClick(SchImg)}>
            <img src={SchImg} width={'100%'} alt='img' height={'100%'} />
            <div className='overlay'>{/* <h3>During inspection</h3> */}</div>
          </Carousel>
          <Carousel onClick={() => handleImageClick(Computer)}>
            <img src={Computer} width={'100%'} alt='img' height={'100%'} />
            <div className='overlay'>{/* <h3>Computer laboratory</h3> */}</div>
          </Carousel>
          <Carousel onClick={() => handleImageClick(SchImg1)}>
            <img src={SchImg1} width={'100%'} alt='img' height={'100%'} />
            <div className='overlay'>{/* <h3>School premises </h3> */}</div>
          </Carousel>
          <Carousel onClick={() => handleImageClick(SchImg2)}>
            <img src={SchImg2} width={'100%'} alt='img' height={'100%'} />
            <div className='overlay'>{/* <h3>During practical</h3> */}</div>
          </Carousel>
        </CarouselContainer>
      </Container>
      <>
        {selectedImage && (
          <ImageModal src={selectedImage}>
            <>
              <div
                style={{ width: '100%', height: '70%' }}
                className='imageDiv'
              />
              <CloseButton onClick={handleCloseImage}>Close</CloseButton>
            </>
          </ImageModal>
        )}
      </>

      <div className='about' id='about'>
        <Box
          header={'About us'}
          body={
            <p>
              Model islamiyya school starts operating on October 2002. It is an
              educational institution that belongs to a group of schools
              established by the former vice president Atiku Abubakar at Ganye,
              Toungo, Jada, and kojoli. Model islamiyya school Ganye is an
              integrated school that trains student on both Western and
              Islamic/Arabic education it has three sections. The primary school
              section known as Model Islamiyya school Ganye, the junior
              secondary school and the senior secondary school known as Atiku
              Abubakar Centre for Arabic and Islamic studies Ganye (A.A.C.A.I.S)
              The school is dividen into 4 houses:
              <ol style={{ marginBlock: '10px' }}>
                <li>
                  <strong>Atiku Abubakar House</strong> Named after a prominent
                  politician known for his contributions to education. The Atiku
                  Abubakar House was established to honor the legacy of Atiku
                  Abubakar and foster a spirit of leadership and excellence
                  among students.
                </li>
                <li>
                  <strong>Gangwari House </strong>
                  Named after a historical figure known for his bravery and
                  leadership.
                </li>
                <li>
                  <strong>Walin Ganye House </strong>
                  Named after a traditional titleholder in the Ganye community.
                  Walin Ganye House was established to honor the legacy of Atiku
                  Abubakar and foster a spirit of leadership and excellence
                  among students.
                </li>
                <li>
                  <strong>Sani Jada House </strong>
                  Named after a respected elder and community leader history,
                  Sani Jada House embodies the values of integrity and service,
                  instilling a sense of responsibility and citizenship in its
                  members.
                </li>
              </ol>
            </p>
          }
          imgUrl={Batch}
        />
      </div>

      <>
        <GeoLocation />
      </>

      <>
        <Footer />
      </>
    </>
  );
}

const Container = styled.div`
  h2 {
    margin: 3rem 0px;
    text-decoration: underline;
    text-align: center;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Carousel = styled.div`
  width: 300px;
  height: 300px;
  cursor: pointer;
  img {
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
interface Props {
  src?: string;
}

const ImageModal = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .imageDiv {
    height: 80%;
    width: 100%;
    background-image: url(${(props) => props.src || ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 80px;
  right: 0;
  background-color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;
