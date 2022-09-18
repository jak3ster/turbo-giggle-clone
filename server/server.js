const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "build", "index.html"));
    });
}

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// FIX : Error: ENOENT: no such file or directory, stat 'C:\Users\Jay\Documents\_UCSD\Coding\bootcamp\Project3\turbo-giggle-clone\client\build\index.html'
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/'));
// });
// FIX : Error: ENOENT: no such file or directory, stat 'C:\Users\Jay\Documents\_UCSD\Coding\bootcamp\Project3\turbo-giggle-clone\client\build\index.html'

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});


const startApolloServer = async (typeDefs, resolvers) => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`=======================================================`);
            console.log(`--- 🌍 Now listening on localhost:${ PORT }! ---------------`);
            // log where we can go to test our GQL API
            console.log(`--- 🚀 Use GraphQL at http://localhost:${ PORT }${ apolloServer.graphqlPath } ---`);
            console.log(`=======================================================`);
        });
    });

};

startApolloServer(typeDefs, resolvers);

// server.applyMiddleware({ app });

// db.once('open', () => {
//     app.listen(PORT, () => {
//         console.log(`=======================================================`);
//         console.log(`--- 🌍 Now listening on localhost:${ PORT }! ---------------`);
//         // log where we can go to test our GQL API
//         console.log(`--- 🚀 Use GraphQL at http://localhost:${ PORT }${ server.graphqlPath } ---`);
//         console.log(`=======================================================`);
//     });
// });
