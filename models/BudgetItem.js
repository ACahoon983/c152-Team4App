
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var budgetSchema = Schema( {
  item: String,
  budget: Number,
  completed: Boolean,
  createdAt: Date,
  userId: ObjectId
} );

module.exports = mongoose.model( 'Budget', budgetSchema );
