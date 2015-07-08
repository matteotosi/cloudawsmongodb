var mongoose = require('mongoose');

module.exports = mongoose.model('Case', {
    CaseAddressString: [
        {number:Number,street:String,city:String}
        ],
    CaseOpenDatetime: Date,
    CaseBeginDatetime: Date,
    CaseCurrentStatus:String,
    CaseDescription:String,
    RequestorFirstName:String,
    RequestorLastName:String,
    age:Number,
    gender:String,
    CasePhoneNumbers: [
        {type:String,number:String}
    ],
    location: [Number],
    ServiceName: String
});
