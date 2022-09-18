const { Appointments, Doctors, History, Patients, Schedules } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        test: async () => {
            return 'test success!';
        },
        getDoctors: async () => {
            const doctors = await Doctors.find();
            return doctors;
        },
        getPatientEmailByID: async (parent, { _id }) => {
            const patient = await Patients.findOne({ _id }).populate('appointments').populate('primarycareteam').populate('history');

            if (!patient) {
                throw new AuthenticationError(` Patient ID not found or invalid!`);
            }

            return patient;
        },
        getDoctorEmailByID: async (parent, { _id }) => {
            const Doctor = await Doctors.findOne({ _id }).populate('appointments');

            if (!Doctor) {
                throw new AuthenticationError(` Doctor ID not found or invalid!`);
            }

            return Doctor;
        },
        getPatient: async (parent, args, context, info) => {
            //if (context.request.patients){
            const patient = await Patients.findOne(context._id);
            return patient;
            //}
            //throw new AuthenticationError(` Patient ID not found or invalid!`);
        }
    },
    Mutation: {
        loginPatients: async (parent, { email, password }) => {
            const patient = await Patients.findOne({ email });

            if (!patient) {
                throw new AuthenticationError(`Incorrect patient login information! [${ email }]`);
            }

            const correctPw = await patient.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect patient password information!', 'INCORRECT_PASSWORD');
            }

            const token = signToken(patient);
            return { token, patient };
        },

        addPatients: async (parent, args) => {
            const { email } = args;
            const existingUser = await Patients.findOne({ email });

            if (existingUser) {
                throw new AuthenticationError(`Email already exist! [${ email }]`);
            }

            const patient = await Patients.create(args);
            const token = signToken(patient);

            return { token, patient };
        },

        loginDoctors: async (parent, { email, password }) => {
            const doctor = await Doctors.findOne({ email });

            if (!doctor) {
                throw new AuthenticationError(`Incorrect patient login information! [${ email }]`);
            }

            const correctPw = await doctor.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect doctor password information!', 'INCORRECT_PASSWORD');
            }

            const token = signToken(doctor);
            return { token, doctor };
        },

        addDoctors: async (parent, args) => {
            const { email } = args;

            const existingUser = await Doctors.findOne({ email });
            if (existingUser) {
                throw new AuthenticationError(`Email already exist! [${ email }]`);
            }

            const doctor = await Doctors.create(args);
            const token = signToken(doctor);

            return { token, doctor };
        }
    }
};

module.exports = resolvers;