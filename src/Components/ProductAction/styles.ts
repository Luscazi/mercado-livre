import styled, { css } from "styled-components";

import {
  HiOutlineHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
 } from 'react-icons/hi'

export const Container = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
`

export const Condition = styled.div`
  font-size: 1.4rem;
  color: var(--color-gray);
  margin-bottom: 1.6rem;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const iconCSS = css`
  width: 2.8rem;
  height: 2.8rem;
  color: var(--color-black);

`;

export const HeartIcon = styled(HiOutlineHeart)`${iconCSS}
  color: var(--color-blue);
  margin-left: 1.6rem;
  flex-shrink: 0;
  cursor: pointer;
`

export const DispatchTag = styled.div`
  margin-top: 1.2rem;
  background: var(--color-blue);
  color: var(--color-white);
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  font-weight: 600;
  width: fit-content;
`

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 4.4rem;
  font-weight: 300;

  & .fraction {
    margin-left: 0.88rem;
  }
  & .cents {
    font-size: 2rem;
    padding-top: 0.3rem;
    margin-left: 0.1rem;
  }
`

export const InstallmentsInfo = styled.div`
  font-size: 1.6rem;
`

export const StockStatus = styled.div`
  margin-top: 2.4rem;
  font-size: 1.8rem;
`

export const MethodCard = styled.div`
  margin-top: 1.8rem;
  display: flex;

  > div {
    margin-left: 0.8rem;
    display: flex;
    flex-direction: column;

    & .title {
      color: var(--color-green);
    }
    & .details {
      margin-top: 0.5rem;
      color: var(--color-gray);
      font-size: 1.4rem;
    }
    & .more {
      margin-top: 0.5rem;
      color: var(--color-blue);
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
`

export const CheckIcon = styled(HiOutlineCheck)`${iconCSS}
  width: 2.4rem;
  height: 2.4rem;
  color: var(--color-green);
`

export const Actions = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
`

interface ButtonProps { solid?: boolean }

export const Button = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  border-radius: 0.4rem;
  padding: 1.2rem 1rem;
  margin-top: 1rem;
  cursor: pointer;

  color: ${props => props.solid ? 'var(--color-white)': 'var(--color-blue)'};
  background-color: ${props => props.solid ? 'var(--color-blue)': 'transparent'};
  border: ${props => props.solid ? 'none': '1px solid var(--color-blue)'};

  cursor: pointer;
`

export const Benefits = styled.div`
  margin-top: 1.6rem;
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    display: flex;

    p {
      margin-left: 1rem;
      color: var(--color-gray);
      font-size: 1.4rem;
    }
  }
`

export const ShieldIcon = styled(HiOutlineShieldCheck)`${iconCSS}
  width: 2rem;
  height: 2rem;
  color: var(--color-gray);
  flex-shrink: 0;
`
