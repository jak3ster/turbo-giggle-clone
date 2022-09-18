const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const doctorsSchema = new Schema(
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
            default: ""
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
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
        usertype: {
            type: String,
            default: "doctor"
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
doctorsSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
        this.usertype = 'doctor';
    }

    next();
});

// custom method to compare and validate password for logging in
doctorsSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Doctors = model('doctors', doctorsSchema);

module.exports = Doctors;