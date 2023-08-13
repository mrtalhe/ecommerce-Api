const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');


// countires
const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }
});
// provinces and states
const provStateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Countries'
    }
});
// cities
const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provstates'
    }
});
// addresses
const addressSchema = new mongoose.Schema({
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Countries',
        required: true
    },
    provState: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provstates',
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cities',
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postalcode: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});
countrySchema.plugin(timestamp);
provStateSchema.plugin(timestamp);
citySchema.plugin(timestamp);
addressSchema.plugin(timestamp);

const CountryModel = mongoose.model("Countries", countrySchema );
const ProvStateModel = mongoose.model("Provstates", provStateSchema );
const CityModel = mongoose.model("Cities", citySchema );
const AddressModel = mongoose.model("Address", addressSchema );
module.exports = {
    AddressModel,
    CountryModel,
    ProvStateModel,
    CityModel
};