import React, { Component } from 'react';
import { getBooksQuery } from '../queries/Queries';
import { graphql } from 'react-apollo';




export class Booklist extends Component {

  displayBooks() {
    let data = this.props.data;
    return data.loading ?
      <h2>loading...</h2> :
      (data.books.map(
        book => <li key={book.id}>{book.name}</li>
      ));
  }
  displayGenre() {
    let data = this.props.data
    if (data.loading) {
      return <h1>loading</h1>
    } else {
      return data.books.map(book => <li key={book.id}>{book.genre}</li>)
    }
  }


  render() {
    return (
      <div>
        <ul>
          {this.displayBooks()}
          {this.displayGenre()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(Booklist);
