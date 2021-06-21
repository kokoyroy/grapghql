import React, { Component } from 'react';
import { getAuthorsQuery } from '../queries/Queries';
import { graphql } from 'react-apollo';
import style from './AddBook.module.css';

export class AddBook extends Component {
    displayOptions() {
        const data = this.props.data;
        return data.loading ? <option>loading</option> :
            data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);
    }

    submit(e) {
        e.preventDefault()
        console.log(e)
    }

    render() {
        return (
            <form className={style.form} onSubmit={(e) => this.submit(e)}>
                <div className="field">
                    <label>Book name</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Genre</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Author</label>
                    <select >
                        <option>Select Author</option>
                        {this.displayOptions()}
                    </select>
                </div>
                <button type='submit'>Add book</button>
            </form>
        );
    }
}



export default graphql(getAuthorsQuery)(AddBook);
