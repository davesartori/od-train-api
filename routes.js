const model = require('od-train-data');
const zooplaService = require('od-train-service');

var getAllProperties = (req, res) => {
    model.find({})
        .then((properties) => res.json(properties))
        .catch((err) => res.status(500).send(err.message));
};

var getProperty = (req, res) => {
    model.findOne({_id: req.params.id})
        .then((property) => {
            if (property) {
                res.json(property)
            } else {
                res.send('No property found');
            }
        })
        .catch((err) => res.status(500).send(err.message));
};

var createProperty = (req, res) => {
    model.create(req.body)
        .then((id) => res.send(id))
        .catch((err) => res.status(500).send(err.message));
};

var updateProperty = (req, res) => {
    model.updateOne({_id: req.params.id}, req.body)
        .then((updatedProperty) => res.send(updatedProperty))
        .catch((err) => res.status(500).send(err.message));
};

var deleteProperty = (req, res) => {
    model.remove({_id: req.params.id})
        .then((updatedProperty) => res.send(updatedProperty))
        .catch((err) => res.status(500).send(err.message));
};

var zooplaImport = (req, res) => {
    zooplaService.getAllPropertyListings(() => {

    });
    res.json({message: "Zoopla data imported"});
};

module.exports = {
    getAllProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    zooplaImport
}

