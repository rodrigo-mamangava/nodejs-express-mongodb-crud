import mongoose from 'mongoose';
import { MobileSchema } from '../models/mobileModel';

const Mobile = mongoose.model('Mobile', MobileSchema);

const defaultSelect = 'model price code brand photo date';

export const addNewMobile = (req, res) => {
    let newMobile = new Mobile(req.body);

    newMobile.save((err, mobile) => {
        if (err) {
            res.statusCode = 412;
            res.send(err);
        }
        res.json(mobile);
    });
};

export const getMobiles = (req, res) => {

    Mobile.find({}, defaultSelect, (err, mobile) => {
        if (err) {
            res.send(err);
        }
        res.json(mobile);
    });
};

export const getMobileByCode = (req, res) => {

    Mobile.findOne({ 'code': req.params.code }, defaultSelect, (err, mobile) => {
        if (err) {

            res.send(err);
        }

        if (mobile) {
            res.json(mobile);
        } else {
            res.statusCode = 404;
            res.json(mobile);
        }

    });
};

export const getMobileById = (req, res) => {

    Mobile.findById(req.params.mobileId, (err, mobile)=> {
        if(err){
            res.send(err);
        }
        res.json(mobile);
    });

};

export const updateMobile = (req, res) => {
    Mobile.findOneAndUpdate(
        { _id: req.params.mobileId },
        req.body,
        { new: true },
        (err, mobile) => {
            if (err) {
                res.send(err);
            }
            res.json(mobile);
        }
    )
};

export const deleteMobile = (req, res) => {
    Mobile.remove({ _id: req.params.mobileId }, (err, mobile) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Excluido com sucesso'
        });
    })
}