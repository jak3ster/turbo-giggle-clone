const { Schema, model } = require('mongoose');
//deleted id will create default in mongooseDB as _id
const appointmentsSchema = new Schema({
    status: {
        type: String,
        default: 'Not Started'
    },
    concern: {
        type: String
    },
    dateTime: {
        type: Date
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'patients',
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'doctors',
    }
});

const Appointments = model('appointments', appointmentsSchema);

module.exports = Appointments;