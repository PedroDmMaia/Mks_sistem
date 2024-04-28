import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  background: #fff;
  border-radius: 8px 8px 0 0;
  box-shadow: -1px 0 15px hsla(216, 0%, 70%, 0.3);

  display: flex;
  flex-direction: column;

  > div {
    padding: 0.75rem 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    min-height: 21rem;

    img {
      width: 100%;
      height: auto;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4px;

      span:first-child {
        ${mixins.fonts.itemTitle};
      }
    }

    p {
      ${mixins.fonts.itemSubtitle};
    }
  }
`

export const Price = styled.span`
  ${mixins.fonts.itemPrice};
  text-align: center;

  background: #373737;
  color: #fff;

  padding: 0.375rem;
  border-radius: 8px;
`
