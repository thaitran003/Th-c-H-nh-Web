const mongoose = require('mongoose');
const { Schema } = mongoose;

const MediaSchema = new Schema({
  title:String,

  view:Number,
  
  time:String
});

const Media = mongoose.model('media', MediaSchema);

module.exports = Media;
