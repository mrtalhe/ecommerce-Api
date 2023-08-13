const controller = require("../../controller");
const _ = require("lodash");

const { LocationType } = require("./../../../types/types");
const { addLocationValidator } = require("./validator");
module.exports = new (class extends controller {
  // add Location
  async addLocation(req, res) {
    if (
      req.body.type === LocationType.ProvState ||
      req.body.type === LocationType.City
    )
      if (!req.body.parent)
        return this.response({
          res,
          code: 400,
          message: "Parent field is required.",
        });

    let location;
    if (req.body.type === LocationType.Country)
      location = new this.CountryModel(req.body);
    else if (req.body.type === LocationType.ProvState)
      location = new this.ProvStateModel(req.body);
    else if (req.body.type === LocationType.City)
      location = new this.CityModel(req.body);
    else
      return this.response({
        code: 400,
        res,
        message: "Type not defined!",
      });
    const data = await location.save();
    this.response({
      res,
      code: 200,
      data: data,
      message: "Location added.",
    });
  }
  // update Location
  async updateLocation(req, res) {
    if (
      req.body.type === LocationType.ProvState ||
      req.body.type === LocationType.City
    )
      if (!req.body.parent)
        return this.response({
          res,
          code: 400,
          message: "Parent field is required.",
        });

    const _id = req.params.locationId;

    let location;
    if (req.body.type === LocationType.Country)
      location = await this.CountryModel.findById(_id);
    else if (req.body.type === LocationType.ProvState)
      location = await this.ProvStateModel.findById(_id);
    else if (req.body.type === LocationType.City)
      location = await this.CityModel.findById(_id);
    else return this.response({ res, code: 400, message: "Invalid request!" });
    if (!location)
      return this.response({
        res,
        code: 404,
        message: `This location id: ${_id} not found!`,
      });

    Object.keys(req.body).forEach((item) => (location[item] = req.body[item]));
    const data = await location.save();
    this.response({ res, code: 200, data: data, message: "Location updated." });
  }
  // delete Location
  async deleteLocation(req, res) {
    const _id = req.params.locationId;

    let location;
    if (req.body.type === LocationType.Country)
      location = await this.CountryModel.findByIdAndDelete(_id);
    else if (req.body.type === LocationType.ProvState)
      location = await this.ProvStateModel.findByIdAndDelete(_id);
    else if (req.body.type === LocationType.City)
      location = await this.CityModel.findByIdAndDelete(_id);
    else return this.response({ res, code: 400, message: "Invalid request!" });
    if (!location)
      return this.response({
        res,
        code: 404,
        message: `This location id: ${_id} not found!`,
      });

    this.response({
      res,
      code: 200,
      data: location,
      message: `This location id: ${_id} deleted!`,
    });
  }

  // list Countries
  async listCountries(req, res) {
    const countires = await this.CountryModel.find({});
    if (!countires)
      return this.response({ res, code: 404, message: "No country found!" });
    this.response({
      res,
      code: 200,
      data: countires,
      message: "Country found.",
    });
  }
  // view location
  async viewLocation(req, res) {
    const _id = req.params.locationId;

  // view Country
    if (req.body.type === LocationType.Country) {
      const country = await this.CountryModel.findById(_id);
      if (!country)
      return this.response({
        res,
        code: 404,
        message: `This location id: ${_id} not found!`,
      });

      const provState = await this.ProvStateModel.find({ parent: _id });
      this.response({res,code: 200, data: { country, provState }, message: "Country found"});
  }

  // view ProvState
  else if (req.body.type === LocationType.ProvState) {
      const provState = await this.ProvStateModel.findById(_id);
      const city = await this.CityModel.find({ parent: _id });
      if (!provState)
          return this.response({res,code: 404, message: `This State/Province id: ${_id} not found!`});

        this.response({code: 200,res, data: { provState, city }, message: 'Province/State found!'})
  }

  // view City
  else if (req.body.type === LocationType.City) {
      const city = await this.CityModel.findById(_id);
      if (!city)
          return this.response({res,code: 404, message: `This City id: ${_id} not found!`});

          this.response({res,code: 200, data: city, message: 'City found'});
  }
  else {
      this.response({code: 400,res, message: 'Invalid request!'})
  }
  }


})();
