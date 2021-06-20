import React, { Component } from 'react';
import Booklist from './components/Booklist';
import './App.css';
import AddBook from './components/AddBook';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});




export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className='App'>
          <h1>hello there!</h1>
          <Booklist />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}


