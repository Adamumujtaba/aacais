import { FlexBox } from './boxStyled';

interface ComponentProps {
  header: string;
  body: any;
  imgUrl: string;
  btn?: string;
  reverse?: boolean;
}

function Box({ header, body, imgUrl, btn, reverse }: ComponentProps) {
  return (
    <>
      <FlexBox reverse={reverse}>
        <div>
          <h2>{header}</h2>
          <p>{body}</p>
          {btn && <button>{btn}</button>}
        </div>
        <div>
          <img src={imgUrl} alt='img' width={'100%'} height={'100%'} />
        </div>
      </FlexBox>
    </>
  );
}

export default Box;
