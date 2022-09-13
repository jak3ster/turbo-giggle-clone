import gql from 'graphql-tag';

export const getMe = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                link
                image
            }
        }
    }
`;