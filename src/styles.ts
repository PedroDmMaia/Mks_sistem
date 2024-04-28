import styled from 'styled-components'

import { mixins } from './styles/mixins'

export const Container = styled.main`
  padding: 16px;
  width: 100%;
  max-width: 938px;
  margin: 0 auto;
  flex: 1;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 22px 31px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 10%;
    }
  }
`

export const Button = styled.button`
  border-radius: 0 0 8px 8px;
  padding: 0.5rem 3.5rem;

  width: 100%;

  background: #0f52ba;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;

  ${mixins.fonts.tagBuy};

  transition: all 0.2s ease-in;

  &:not(:disabled):hover {
    background-color: hsl(216, 85%, 50%);
  }
`

export const Footer = styled.footer`
  text-align: center;
  ${mixins.fonts.footer}

  background: #eeeeee;

  margin-top: 5rem;
`

export const OrderResume = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;

  width: 34rem;
  padding: 2.25rem 2.9375rem;

  background: #0f52ba;
  box-shadow: -1px 0 15px hsla(1, 0%, 0%, 0.25);

  @media screen and (max-width: 768px) {
    max-width: 81.5%;
    padding: 32px 25px;
  }
`

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

  span {
    ${mixins.fonts.titleXl};
    color: #fff;
  }

  svg {
    display: flex;
    align-items: center;

    background: #000;
    color: #fff;

    border-radius: 50%;
    width: 38px;
    height: 38px;
    padding: 8px;
  }
`

export const OrdetItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  height: 50%;
  padding: 1.563rem;

  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  &::-webkit-scrollbar {
    padding: 0.63rem;
    width: 15px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 8px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 23.75rem;

    background: #fff;
    border-radius: 8px;
    padding: 1.18rem 1.44rem;

    position: relative;

    @media screen and (max-width: 768px) {
      display: block;
      width: 100%;
    }

    div:first-child {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        width: 3.125rem;
      }

      span#name {
        ${mixins.fonts.cartTitle};
        width: 113px;
      }

      @media screen and (max-width: 768px) {
        display: block;
        text-align: center;

        img {
          margin: 0 auto;
          width: 80px;
          display: block;
        }
      }
    }

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);

      display: flex;
      align-items: center;

      background: #000;
      color: #fff;

      border-radius: 50%;
      width: 17px;
      height: 17px;
      padding: 2px;

      @media screen and (max-width: 768px) {
        transform: translate(-50%, 50%);
      }
    }

    > span {
      ${mixins.fonts.cartPrice};
    }
  }
`

export const QuantityInput = styled.div`
  position: relative;
  top: -10px;

  @media screen and (max-width: 768px) {
    width: 40%;
    margin-bottom: 1rem;

    top: 0;
  }

  > div {
    border: 1px solid #bfbfbf;
    border-radius: 8px;

    padding: 4px;

    display: flex;
    align-items: center;
    gap: 4px;

    span {
      ${mixins.fonts.cartTitle};
      border-left: 1px solid #bfbfbf;
      border-right: 1px solid #bfbfbf;
      padding: 0 0.5rem;
    }

    span#quantity {
      color: red;
    }
  }

  > span {
    ${mixins.fonts.qunatityFont};
  }
`

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;

  ${mixins.fonts.titleXl}
  color: #fff;

  position: fixed;
  bottom: 90px;

  p {
    margin-right: 15.6rem;
  }

  @media screen and (max-width: 768px) {
    p {
      margin-right: 2rem;
    }
  }
`

export const FinishOrder = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 1rem 0;

  background: #000;
  color: #fff;

  ${mixins.fonts.titleXl};

  transition: all ease 0.1s;

  &:not(:disabled):hover {
    background-color: hsla(0, 0%, 9%, 1);
  }
`
