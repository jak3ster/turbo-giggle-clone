const mongoose = require('mongoose');
mongoose.pluralize(null);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/medical-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;
