const Meter = require('../models/well.model')

createMeter = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Meter',
        })
    }

    const meter = new Meter(body)

    if (!meter) {
        return res.status(400).json({ success: false, error: err })
    }

    meter
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: meter._id,
                message: 'Meter created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Meter not created!',
            })
        })
}

updateMeter = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Meter.findOne({ _id: req.params.id }, (err, meter) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Meter not found!',
            })
        }
        meter.start = body.start
        meter.timeStart = body.timeStart
        meter.meterStart = body.meterStart
        meter.end = body.end
        meter.meterEnd = body.meterEnd
        meter.meterEnd = body.meterEnd
        meter.inchesPerAcre = body.inchesPerAcre
        meter.acreFeet = body.acreFeet
        meter.acres = body.acres
        meter.hours = body.hours
        meter
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: Meter._id,
                    message: 'Meter updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Meter not updated!',
                })
            })
    })
}

deleteMeter = async (req, res) => {
    await Meter.findOneAndDelete({ _id: req.params.id }, (err, meter) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!meter) {
            return res
                .status(404)
                .json({ success: false, error: `Meter not found` })
        }

        return res.status(200).json({ success: true, data: meter })
    }).catch(err => console.log(err))
}

getMeterById = async (req, res) => {
    await Meter.findOne({ _id: req.params.id }, (err, meter) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!meter) {
            return res
                .status(404)
                .json({ success: false, error: `Meter not found` })
        }
        return res.status(200).json({ success: true, data: meter })
    }).catch(err => console.log(err))
}

getMeters = async (req, res) => {
    await Meter.find({}, (err, meters) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!meters.length) {
            return res
                .status(404)
                .json({ success: false, error: `Meter not found` })
        }
        return res.status(200).json({ success: true, data: meters })
    }).catch(err => console.log(err))
}

module.exports = {
    createMeter,
    updateMeter,
    deleteMeter,
    getMeters,
    getMeterById,
}