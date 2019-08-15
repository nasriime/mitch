import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
`;
export const Heading = styled.h1`
  text-align: center;
`;
export const NoResult = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const ProductsWrapper = styled.div`
  width: 100%;
`;
export const ProductContainer = styled.div`
  overflow:hidden;
  background-color: #fff;
  margin-bottom: 20px;
  box-shadow: 5px 10px #e4e4e4;
  padding:10px 15px;
}
`;
export const ProductSubContainer = styled.div`
  display: flex;
`;
export const ProductImage = styled.img`
  max-height: 150px;
  padding: 15px;
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-flow: column
`;
export const Span = styled.span`
  font-weight: 700;
  min-width: 200px;
`;
