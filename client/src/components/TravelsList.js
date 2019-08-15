import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts, startLoading } from '../actions/productActions'


class TravelsList extends Component {
  componentWillMount(){
    this.props.startLoading();
    this.props.fetchProducts();
  }
    
  render() {
    const productItems = this.props.products.map( (product, index) => (
      <ProductContainer key = {index}>
        <h3>{ product.name }</h3>
        <ProductSubContainer>
          <ProductImage src={ product.image} />
          <ProductDetails>
            <p><Span>Brand:</Span> { product.brand }</p>
            <p><Span>Category:</Span> { product.category.name }</p>
            <p><Span>Price:</Span> ${ product.price }</p>
          </ProductDetails>
        </ProductSubContainer>
      </ProductContainer>
    ));
    
    return (
      <Container>
        <Heading>Products</Heading>
        <ProductsWrapper>
          {productItems.length > 0 ?  productItems : <NoResult> No results found!</NoResult>}
        </ProductsWrapper>
      </Container>
    )
  }
}

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading
})

export default connect(mapStateToProps, { fetchProducts, startLoading })(TravelsList);