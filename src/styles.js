import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: goldenrod;
`;
const Description = styled.h4`
  text-align: center;
`;
const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const ProductWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.gold};
    }
  }
`;
export { ProductWrapper, Description, ListWrapper, Title, ShopImage };
export default styled;
