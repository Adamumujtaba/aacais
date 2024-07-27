import Box from '../../components/flexbox/box';
import EduSvg from '../../images/edu.svg';
import ExamComponents from './exams.components';
import Batch from '../../images/model.jpg';
import Computer from '../../images/computer.jpg';
import scienceLap from '../../images/lap.svg';
import SchImg from '../../images/inspection.jpg';
import SchImg1 from '../../images/break.jpg';
import SchImg2 from '../../images/computer3.jpg';
import Founders from './founders.component';
import GeoLocation from './geo.location';
import Board from './board';
import MessageCardComponent from '../../components/message-card/message.card.component';

function Home() {
  return (
    <>
      <Box
        header={'Atiku Abubakar Centre For Arabic and Islamic Studies'}
        body={
          <p>
            We are proud to offer a curriculum that combines both Western and Arabic education, providing our students
            with well rounded and culturally rich learning experience. Our students get knowledge that benefits them in
            this world and in the hereafter. It gives them a easy opportunity to have two wings which enable them to fly
            perfectly. Our curriculum trains them to be tolerant, responsible and functional Members of the Society
          </p>
        }
        imgUrl={EduSvg}
        btn={undefined}
        reverse={undefined}
      />

      <ExamComponents />

      <Box
        header={'Computer Lap'}
        body={
          <p>
            With the increasing reliance on technology in all aspects of life, having access to a computer lab is more
            important than ever before. Our lab is designed to support and enhance the learning experience of our
            students, helping them to build skills and confidence that will benefit them throughout their academic and
            professional careers. our record-keeping was automated through the use of{' '}
            <a href="https://flexisaf.com/" target="_blank" rel="noreferrer">
              FlexiSaf Software
            </a>{' '}
            product{' '}
            <a href="https://srms.ng/" target="_blank" rel="noreferrer">
              Student Record Management System (SRMS)
            </a>
            .
          </p>
        }
        imgUrl={Computer}
      />

      <Box
        header={'Science Lab'}
        body={
          <p>
            Our school is proud to announce that we have a state-of-the-art science laboratory to provide our students
            with hands-on and immersive experiences in the field of science. Equipped with modern equipment and
            resources, our laboratory is a place where students can explore, experiment and learn through practical
            applications of scientific concepts
          </p>
        }
        reverse
        imgUrl={scienceLap}
      />

      <Founders />

      <Board />

      <div className="carousel-cont">
        <h2>Discover the warmth and camaraderie of our school community.</h2>
        <div className="gallery">
          <div className="carousel-1">
            <img src={SchImg} width={'100%'} alt="img" height={'100%'} />
            <div className="overlay">{/* <h3>During inspection</h3> */}</div>
          </div>
          <div className="carousel-1">
            <img src={Computer} width={'100%'} alt="img" height={'100%'} />
            <div className="overlay">{/* <h3>Computer laboratory</h3> */}</div>
          </div>
          <div className="carousel-1">
            <img src={SchImg1} width={'100%'} alt="img" height={'100%'} />
            <div className="overlay">{/* <h3>School premises </h3> */}</div>
          </div>
          <div className="carousel-1">
            <img src={SchImg2} width={'100%'} alt="img" height={'100%'} />
            <div className="overlay">{/* <h3>During practical</h3> */}</div>
          </div>
        </div>
      </div>

      <MessageCardComponent />

      <Box
        header={'About us'}
        body={
          <>
            Model islamiyya school starts operating on October 2002. It is an educational institution that belongs to a
            group of schools established by the former vice president Atiku Abubakar at Ganye, Toungo, Jada, and kojoli.
            Model islamiyya school Ganye is an integrated school that trains student on both Western and Islamic/Arabic
            education it has three sections. The primary school section known as model islamiyya school Ganye, the
            junior secondary School and the senior secondary School known as Atiku Abubakar Centre for Arabic and
            Islamic studies Ganye (A.A.C.A.I.S)
          </>
        }
        imgUrl={Batch}
      />

      <GeoLocation />
    </>
  );
}

export default Home;
