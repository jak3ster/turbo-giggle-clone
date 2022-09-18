const { Schema, model } = require('mongoose');
//removed patient id as history belongs to the patient
const historySchema = new Schema({
    height: {
        type: String,
        default: '0',
        required: true
    },
    weight: {
        type: Number,
        default: '0',
        required: true
    },
    allergies: {
        type: String,
        required: true,
        default: "unknown"
    },
    medications: {
        type: String,
        required: true,
        default: "unknown"
    },
    data: {
        type: String,
        required: true,
        default: ""
    },
    // patient_id: {
    //     type: String,
    //     required: true
    // }
});

const History = model('history', historySchema);

module.exports = History;