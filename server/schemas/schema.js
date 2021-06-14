const graphql = require("graphql");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

const books = [
    { name: 'ta mistika tou valtou', id: '1', authorID: '1' },
    { name: 'ta aytia tou vasilia', id: '2', authorID: '2' },
    { name: 'to mouni kai to delfini oso to xtypas tha xynei', id: '3', authorID: '1' },
    { name: 'o trelantonis', id: '4', authorID: '2' },
    { name: 'to kokkori tis asfaltou', id: '5', authorID: '1' },
    { name: 'ta oxi kai toso mystika toy valtou', id: '6', authorID: '3' },
    { name: 'to koritsi kai o gypas', id: '6', authorID: '3' },
    { name: 'ti eixes gianni , eixa panda', id: '6', authorID: '3' },
];

const authors = [
    { name: 'kostas kourouklidis', age: 44, id: '1' },
    { name: 'panagiotis aleksandridis', age: 14, id: '2' },
    { name: 'eyterpi nikolaou', age: 54, id: '3' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent);
                return authors.find(author => author.id === parent.authorID);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books.filter(book => book.authorID === parent.id);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                console.log(parent);
                return books.find(book => book.id === args.id);
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                console.log(parent);
                return authors.find(author => author.id === args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});