import styled from "styled-components";

const HyButton = styled.button`
border: 1px solid red;
border-radius: 5px;
`
export const HomeWrapper = styled.div`
.top {
  .banner {
    color: red;
  }
}

.bottom {
  .header {
    color: ${props => props.theme.color || 'pink'};
    font-size: ${props => props.theme.size || 30}px;
  }

  .product-list {
    .item {
      color: blue;
    }
  }
`

export const HYButtonWrapper = styled(HyButton)`
background-color: #0f0;
color: #fff;
padding: 5px 20px;
`