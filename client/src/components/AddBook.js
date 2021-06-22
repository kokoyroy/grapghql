import React, { Component } from 'react';
import { getAuthorsQuery, addBookMutation } from '../queries/Queries';
import { graphql } from 'react-apollo';
import { compose } from 'redux'
import style from './AddBook.module.css';

export class AddBook extends Component {
    state = {
        name: '',
        genre: '',
        authorId: ''
    }

    displayOptions() {
        const data = this.props.getAuthorsQuery;
        return data.loading ? <option>loading</option> :
            data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);
    }

    addBook() {

    }

    submit(e) {
        e.preventDefault()
        console.log(this.props)
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            }
        })
        console.log(this.props)
    }

    render() {
        // console.log(this.props)
        return (
            <form className={style.form} onSubmit={(e) => this.submit(e)}>
                <div className="field">
                    <label>Book name</label>
                    <input onChange={(e) => this.setState({ name: e.target.value })} type="text" />
                </div>
                <div className="field">
                    <label>Genre</label>
                    <input onChange={(e) => this.setState({ genre: e.target.value })} type="text" />
                </div>
                <div className="field">
                    <label>Author</label>
                    <select onChange={(e) => this.setState({ authorId: e.target.value })}>
                        <option>Select Author</option>
                        {this.displayOptions()}
                    </select>
                </div>
                <button type='submit'>Add book</button>
            </form>
        );
    }
}



export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
