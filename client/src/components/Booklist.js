import React, { Component } from 'react';
import { getBooksQuery } from '../queries/Queries';
import { graphql } from 'react-apollo';




export class Booklist extends Component {

  displayBooks() {
    let data = this.props.data;
    console.log(this.props)
    return data.loading ?
      <h2>loading...</h2> :
      (data.books.map(
        book => <li key={book.id}>{book.name}</li>
      ));
  }
  


  render() {
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
