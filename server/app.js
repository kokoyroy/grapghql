require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/schema');
const mongoose = require('mongoose');
const app = express();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cf3uf.mongodb.net/Cluster0?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(url, options, (err) => err ? console.log(err) : console.log('mongo connected'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(4000, () => console.log('app running on port 4000'));