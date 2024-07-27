import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import Waziri from '../../images/waziri.jpg';

const images = [
  {
    original: Waziri,
    thumbnail: Waziri,
    title: 'Late Waziri',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    title: 'Alh Sani Jada',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    title: 'Alh. Dan Azumi',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    title: 'Muhammad Modibbo Babbawa Ganye',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    title: 'Alh. Abdulkarim Imam Jada',
  },

  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    title: 'Late. Alh Iya Haske',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    title: 'Abubakar Garba Toungo',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    title: "Modibbo Saa'du",
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    title: 'Sec. Traditional Council Ganye',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    title: 'Abubakar Garba Toungo',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    title: 'Alh. Idris Sulaiman',
  },
];

const CustomImage = ({ image, ...rest }: any) => {
  return (
    <ImageCard>
      <img {...rest} src={image.original} alt={image.originalAlt} />
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: '17px',
          fontWeight: 'bold',
          color: '#fff',
          // backgroundColor: 'rgba(0, 0, 0, 0.229)',
          padding: '20px',
          width: '30%',
          margin: 'auto',
        }}>
        {image.title}
      </div>
    </ImageCard>
  );
};

function Board() {
  return (
    <div style={{ margin: '40px auto' }}>
      <Header>Management Board</Header>
      <ImageGallery
        items={images}
        disableThumbnailScroll={true}
        autoPlay={false}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={!true}
        startIndex={0}
        // onPlay={}
        renderItem={(item) => <CustomImage image={item} {...item} />}

        // showFullscreenButton={false}
      />
    </div>
  );
}

export default Board;

const Header = styled.h2`
  /* background-color: red; */
  padding: 10px;
  text-align: center;
  text-decoration: underline;
`;

const ImageCard = styled.div`
  /* background: coral; */
  position: relative;
  /* max-height: 300px; */
  /* min-height: 300px; */
  height: 500px;
  img {
    width: 400px;
    height: 100%;
  }
`;
