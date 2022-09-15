import gql from 'graphql-tag';
// import { gql } from '@apollo/client';

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