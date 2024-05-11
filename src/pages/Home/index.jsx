/* eslint-disable no-unreachable */
import React from 'react';
import Box from '../../Components/FlexBox/Box.tsx';
import Computer from '../../images/computer.jpg';
import scienceLap from '../../images/lap.svg';
import EduSvg from '../../images/edu.svg';
import SchImg from '../../images/inspection.jpg';
import SchImg1 from '../../images/break.jpg';
import SchImg2 from '../../images/computer3.jpg';

import Batch from '../../images/model.jpg';
// import axios from 'axios';
// import { Helmet } from 'react-helmet';
// import GeoLocation from '../../components/GeoLocation';
// import ICT from '../../components/ICT';
// import Founders from '../../components/Founders/founders';
// import ManagementBoard from '../../components/Management/managementBoard';

function Home() {
  let aboutUS = `Model islamiyya school starts operating on October 2002. 
                  It is an educational institution that belongs to a group of schools established by the 
                  former vice president Atiku Abubakar at Ganye, Toungo, Jada, and kojoli.           
                  Model islamiyya school Ganye is an integrated school that trains 
                  student on both Western and Islamic/Arabic education it has three sections. 
                  The primary school section known as model islamiyya school Ganye, the junior 
                  secondary School and the senior secondary School known as Atiku Abubakar Centre 
                  for Arabic and Islamic studies Ganye (A.A.C.A.I.S)`;
  let lapMsg = `Our school is proud to announce that we have a state-of-the-art science 
                laboratory to provide our students with hands-on and immersive experiences in the field of science. 
                Equipped with modern equipment and resources, our laboratory is a place where students can 
                explore, experiment and learn through practical applications of scientific concepts.`;
  /* const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState();
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  let lines = answer?.split('\n');
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(`${baseUrl}/openai`, { question })
      .then((res) => {
        setLoading(false);

        setAnswer(res.data.msg);
      })
      .catch((error) => {
        setLoading(false);
        setMsg(error.response.data.msg);
        // setMsg(error.message);
      });
  };
  */
  return (
    <>
      <>
        <Box
          primary
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

      {/* <div>
        <Exams />
      </div> */}

      {/* <div className='assignment' style={{ display: '' }}>
        <div className='child'>
          <h2>How can I assist you?</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
              
              placeholder='Ask me any question from any subject'
            ></textarea>
            <div className='btn-div'>
              <button
                type='submit'
                disabled={question === '' ? true : false}
                style={{
                  background: question === '' ? 'lightgrey' : '#1358c8',
                }}
              >
                {loading ? <Spin size='small' /> : 'Submit'}
              </button>
              <button
                type='button'
                className='clear'
                onClick={() => setQuestion('')}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
        <div className='child'>
          <div className='answer'>
            <div>
              {loading ? (
                <Spin size='large' className='spin' />
              ) : msg !== '' ? (
                <h3>{msg}</h3>
              ) : lines?.length > 0 ? (
                lines?.map((line, index) => (
                  <React.Fragment key={index}>
                    {parse(line)}
                    <br />
                  </React.Fragment>
                ))
              ) : (
                'Type the question and submit the form'
              )}
            </div>
          </div>
        </div>
      </div> */}

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
        <Box header={'Science Lab'} body={lapMsg} imgUrl={scienceLap} />
      </>

      {/* <>
        <Founders />
      </> */}
      {/* 
      <>
        <ManagementBoard />
      </> */}

      <div className='carousel-cont'>
        <h2>Discover the warmth and camaraderie of our school community.</h2>
        <div className='gallery'>
          <div className='carousel-1'>
            <img src={SchImg} width={'100%'} alt='img' height={'100%'} />
            <div className='overlay'>{/* <h3>During inspection</h3> */}</div>
          </div>
          <div className='carousel-1'>
            <img src={Computer} width={'100%'} alt='img' height={'100%'} />
            <div className='overlay'>{/* <h3>Computer laboratory</h3> */}</div>
          </div>
          <div className='carousel-1'>
            <img src={SchImg1} width={'100%'} alt='img' height={'100%'} />
            <div className='overlay'>{/* <h3>School premises </h3> */}</div>
          </div>
          <div className='carousel-1'>
            <img src={SchImg2} width={'100%'} alt='img' height={'100%'} />
            <div className='overlay'>{/* <h3>During practical</h3> */}</div>
          </div>
        </div>
      </div>

      {/* <div>
        <ICT />
      </div> */}

      <div className='about' id='about'>
        <Box header={'About us'} body={aboutUS} imgUrl={Batch} />
      </div>

      {/* <div>
        <GeoLocation />
      </div> */}
    </>
  );
}

export default Home;
