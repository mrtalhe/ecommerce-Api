const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
},
encoding: {
    type: String,
    required: true
},
size: {
    type: String,
    required: true
},
filepath: {
    type: String,
    required: true
},
mimetype: {
    type: String,
    required: true
},
md5: {
    type: String,
    required: true
},
userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
}
});
fileSchema.plugin(timestamp);

const File = mongoose.model("File", fileSchema );
module.exports = File;