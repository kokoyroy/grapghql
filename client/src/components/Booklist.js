import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getBooksQuery = gql`
{
  books{
    name
    id
  }
}
`;

export class Booklist extends Component {

  displayBooks() {
    let data = this.props.data;
    return data.loading ?
      <h2>loading...</h2> :
      (data.books.map(
        book => <li key={book.id}>{book.name}</li>
      ));
  }


  render() {
    // console.log(this.props);
    return (
      <div>
        <ul>
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(Booklist);
