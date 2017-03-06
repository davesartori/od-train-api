const model = require('od-train-data');

var getAllProperties = (req, res) => {
    new model({}).findAll((err, data) => {
        res.send(data);
    });
};

var getAllProperty = (req, res) => {
    new model({listingId: `${req.params.id}`}).findByListingId((err, data) => {
        res.send(data);
    });
};

var createProperty = (req, res) => {

    new model(req.body).save((err, data) => {
        console.log(err);
        res.send("Saved " + req.body.listingId);
    });
};

module.exports = {
    getAllProperties,
    getAllProperty,
    createProperty
}

