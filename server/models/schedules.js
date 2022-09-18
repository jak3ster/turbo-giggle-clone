const { Schema, model } = require('mongoose');
//deleted id will create default in mongooseDB as _id
const schedulesSchema = new Schema({
    days: {
        type: Number,
        required: true
    },
    schedule_start: {
        type: Date,
        required: true
    },
    schedule_end: {
        type: Date,
        required: true
    },
    doctor_id: {
        type: String,
        required: true
    }
});

const Schedules = model('schedules', schedulesSchema);

module.exports = Schedules;