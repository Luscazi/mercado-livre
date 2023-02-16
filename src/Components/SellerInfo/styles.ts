import styled, { css } from "styled-components";
import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineClock
} from 'react-icons/hi'

export const Container = styled.div`
  padding: 4.8rem 3.2rem;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);

`
export const Title = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 600;
`

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem;

  > div {
    margin-left: 0.8rem;

    > p {
      font-size: 1.6rem;
    }
    > strong {
      font-size: 1.4rem;
      font-weight: normal;
      color: var(--color-gray);
    }
  }
`

const iconCSS = css`
  width: 3rem;
  height: 3rem;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`${iconCSS}`

export const ReputationCard = styled.div`
  margin-top: 3.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ReputationThermomete = styled.ol`
  list-style: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  grid-gap: 0.7rem;
  padding: 0 0.4rem;

  > li {
    width: 100%;
    height: 0.8rem;

    &:nth-child(1) {
      background: var(--reputation-1);
    }
    &:nth-child(2) {
      background: var(--reputation-2);
    }
    &:nth-child(3) {
      background: var(--reputation-3);
    }
    &:nth-child(4) {
      background: var(--reputation-4);
    }
    &:nth-child(5) {
      background: var(--reputation-5);
    }

    &.active {
      height: 1.2rem;
    }
  }
`

export const ReputationRow = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;

  > div {
    width: 33%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > strong {
      font-size: 2.4rem;
      font-weight: normal;
      height: 3rem;
    }

    > span {
      font-size: 1.2rem;
    }

    position: relative;

    & + div {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 3.6rem;
        border-left: 1px solid var(--color-border);
      }
    }
  }
`

export const SuportIcon = styled(HiOutlineChatAlt2)`${iconCSS}`

export const ClockIcon = styled(HiOutlineClock)`${iconCSS}`

export const More = styled.a`
  margin-top: 2.4rem;
  color: var(--color-blue);
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
`
