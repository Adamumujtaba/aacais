import React from 'react';
import { FlexBox } from './box.styled';

interface FlexBoxProps {
  header: string;
  body: React.ReactNode;
  imgUrl: string;
  btn?: string;
  reverse?: boolean;
}
function Box({ header, body, imgUrl, btn, reverse }: FlexBoxProps) {
  return (
    <>
      <FlexBox reverse={reverse}>
        <div>
          <h2>{header}</h2>
          <section>{body}</section>
          {btn && <button>{btn}</button>}
        </div>
        <div>
          <img src={imgUrl} alt="img" width={'100%'} height={'100%'} />
        </div>
      </FlexBox>
    </>
  );
}

export default Box;
