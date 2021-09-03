import React from 'react';
import styled from 'styled-components';
import { Button } from '../myhome/Button';

function InfoSection({
  heading,
  paragraph1,
  paragraph2,
  buttonLabel,
  reserve,
  image,
}) {
  return (
    <div>
      <Section>
        <Container>
          <ColumLeft>
            <h1>{heading}</h1>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <Button to="/homes">{buttonLabel}</Button>
          </ColumLeft>
          <ColumnRight>
            <img src={image} alt="home" />
          </ColumnRight>
        </Container>
      </Section>
    </div>
  );
}

export default InfoSection;

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 8rem;
`;
const Container = styled.div`
  padding: 3rem calc((100vh - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  /* order: ${({ reverse }) => (reverse ? '2' : '1')}; */
  /* order: 1; */

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.4rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  /* order: ${({ reverse }) => (reverse ? '1' : '2')}; */
  /* order: 1; */
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    } */
  }

  @media screen and (max-width: 768px) {
    /* order: ${({ reverse }) => (reverse ? '2' : '1')}; */
    /* order: 1; */
  }
`;
