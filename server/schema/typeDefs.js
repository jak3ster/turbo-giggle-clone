const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Patients {
        _id: ID
        username: String
        firstName: String
        lastName: String
        email: String
        gender : String
        appointments: [Appointments]
        primarycareteam: [Doctors]
        history: History
    }   
    
    type Appointments {
        status: String
        concern : String
        dateTime: String
        patient: Patients
        doctor : Doctors
    }

    type History {
        height: String
        weight: String
        allergies: String
        medications: String
        data: String
    }

    type AuthPatients {
        token: ID!
        patient: Patients
    }

    type Doctors {
        _id: ID
        firstName: String
        lastName: String
        username: String
        email: String
        appointments: [Appointments]
    }

    type AuthDoctors {
        token: ID!
        doctor: Doctors
    }

    type User {
        _id: String
        email: String
    }


    type Patient {
        _id: ID!
        username: String
        email: String!
        firstName: String
        lastName: String
    }

    type Query {
        getPatient(_id:String!): Patient
        getDoctorEmailByID(_id: String!): Doctors


        test: String
        testUser: Patients
        currentUser: User
        me: Patients
        patients: [Patients]
        doctors: [Doctors]
        patient(username: String!): Patients
        doctor(username: String!): Doctors
        getDoctors:[Doctors]
        getPatientEmailByID(_id: String!): Patients
    }

    type Mutation {
        loginPatients(email: String!, password: String!): AuthPatients
        addPatients(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): AuthPatients 
        loginDoctors(email: String!, password: String!): AuthDoctors
        addDoctors(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): AuthDoctors 
    }

`;

module.exports = typeDefs;