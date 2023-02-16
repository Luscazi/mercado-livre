import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.6rem 0;

  > a {
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--color-blue);
    padding: 0.25rem 0;

    & + a {
      padding-left: 1rem;
      border-left: 1px solid var(--color-border);
      margin-left: 1rem;
    }
  }
`

export const Panel = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: grid;
  grid-template-columns: 65fr 35fr;
`

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53rem;

  > img {
    height: 73%;
  }
`

export const Section = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 4.8rem 3.2rem;

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 1.8rem;
    margin-bottom: 4.0rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span + span {
      margin-top: 1.6rem;
    }
    .title {
      font-size: 1.6rem;
      color: var(--color-black);
    }
    .description {
      margin-top: 0.5rem;
      font-size: 1.4rem;
      color: var(--color-gray);
      line-height: 1.9rem;
    }
  }

  > a {
    margin-top: 2rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-blue);
    text-decoration: none;
  }
`

export const Description = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 4.4rem 3.2rem;

  > h2 {
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }

  > p {
    font-size: 2.0rem;
    color: var(--color-gray);
    line-height: 2.7rem;
  }
`