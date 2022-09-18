const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const patientsSchema = new Schema(
    {
        username: {
            type: String,
            default: ""
        },
        firstName: {
            type: String,
            default: ""
        },
        lastName: {
            type: String,
            default: ""
        },
        gender: {
            type: String,
            default: "unknown"
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        address: {
            type: String,
            default: ""
        },
        password: {
            type: String,
            required: true
        },
        appointments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'appointments',
            }
        ],
        primarycareteam: [
            {
                type: Schema.Types.ObjectId,
                ref: 'doctors',
            }
        ],
        history: {
            type: Schema.Types.ObjectId,
            ref: 'history',
        },
        usertype: {
            type: String,
            default: null
        }
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
patientsSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
        this.usertype = 'patient';
    }
    next();
});

// custom method to compare and validate password for logging in
patientsSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Patients = model('patients', patientsSchema);

module.exports = Patients;