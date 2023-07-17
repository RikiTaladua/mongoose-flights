const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  airports: {
    type: String,
    enum: ['LAS', 'OAK', 'SJC']
  },
  arrival: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
    min: 1927
  }
}, {
  timestamps: true
});


const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
     enum: ['United', 'Alaskan', 'Southwest']
    },
    airport: {
        type: String,
      enum: ['LAX', 'SFO', 'FAT']  
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
     },
     destinations: [destinationSchema],
     nowFlying: { type: Boolean, default: true },
    departs: {
        type: Number,
        default: function() {
            return new Date().getFullYear();
          },
          min: 2022
        }, 
      }, {
           timestamps: true 
        
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);