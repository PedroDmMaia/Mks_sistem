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
  }
`

export const Button = styled.button`
  border-radius: 0 0 8px 8px;
  padding: 0.5rem 3.5rem;

  width: 218px;

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

  min-width: 468px;
  padding: 2.25rem 2.9375rem;

  background: #0f52ba;
  box-shadow: -1px 0 15px hsla(1, 0%, 0%, 0.25);
`

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 379px;

    background: #fff;
    border-radius: 8px;
    padding: 19px 23px;

    div:first-child {
      display: flex;
      align-items: center;
      gap: 1.3125rem;

      img {
        width: 50px;
      }

      span#name {
        ${mixins.fonts.cartTitle};
      }
    }
  }
`
