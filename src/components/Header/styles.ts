import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Contianer = styled.header`
  background: #0f52ba;
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.75rem 4.0625rem;
  margin-bottom: 7.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span:first-child {
      ${mixins.fonts.titleL};
    }

    span:last-child {
      ${mixins.fonts.titleM};
      position: relative;
      top: 0.3rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2% 5%;

    margin-bottom: 0;
  }
`

export const Carrinho = styled.button`
  height: 2.8125rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  background: #fff;

  padding: 0.875rem;
  border-radius: 8px;

  ${mixins.fonts.cartNumber};

  span {
    margin-right: 0.875rem;
  }
`
