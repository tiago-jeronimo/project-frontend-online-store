import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cards extends React.Component {
  render() {
    const { filteredItems: { thumbnail, title, price, id } } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        <p>{title}</p>
        <p>{price}</p>
        <Link
          to={ `/ProductDetails/${id}` }
          data-testid="product-detail-link"
        >
          Mais detalhes
        </Link>
      </div>
    );
  }
}

Cards.propTypes = {
  filteredItems: propTypes.shape({
    thumbnail: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    id: propTypes.string,
  }).isRequired,
};
