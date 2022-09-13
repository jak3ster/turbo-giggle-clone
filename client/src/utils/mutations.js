import gql from 'graphql-tag';

export const loginUser = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const createUser = gql`
    mutation addUser($username:String!, $email:String!, $password: String!){
        addUser(username: $username, email:$email, password:$password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const saveBook = gql`
    mutation saveBook($bookData: BookInput!) {
        saveBook(bookData: $bookData) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;

export const removeBook = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;