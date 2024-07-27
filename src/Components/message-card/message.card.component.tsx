import React from 'react';
import styled from 'styled-components';

function MessageCardComponent() {
  return (
    <Container>
      <Flex>
        <Card>
          Atiku Abubakar House Named after a prominent politician known for his contributions to education. The Atiku
          Abubakar House was established to honor the legacy of Atiku Abubakar and foster a spirit of leadership and
          excellence among students.
        </Card>
        <Card>Gangwari House Named after a historical figure known for his bravery and leadership.</Card>
      </Flex>
      <Flex>
        <Card>
          Walin Ganye House Named after a traditional titleholder in the Ganye community. Walin Ganye House was
          established to honor the legacy of Atiku Abubakar and foster a spirit of leadership and excellence among
          students.
        </Card>
        <Card>
          Sani Jada House Named after a respected elder and community leader history, Sani Jada House embodies the
          values of integrity and service, instilling a sense of responsibility and citizenship in its members.
        </Card>
      </Flex>
    </Container>
  );
}

export default MessageCardComponent;

const Card = styled.div`
  width: var(--500px);
  padding: var(--16px);
  border-radius: var(--16px);
  min-height: var(--200px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  margin: var(--16px) auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media screen and (max-width: 760px) {
    width: 90%;
  }
`;

const Container = styled.div`
  padding: var(--64px) 10px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
