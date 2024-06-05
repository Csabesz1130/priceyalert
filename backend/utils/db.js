const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
