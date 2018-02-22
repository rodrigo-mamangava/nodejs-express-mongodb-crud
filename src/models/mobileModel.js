import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MobileSchema = new Schema({
    model: {
        type: String,
        required: 'modelo é obrigatório'
    },
    price: {
        type: Number,
        required: 'price é obrigatório'
    },
    code: {
        type: String,
        required: 'code é obrigatório'
    },
    brand: {
        type: String,
        required: 'brand é obrigatório'
    },
    photo: {
        type: String,
        required: 'photo é obrigatório'
    },
    date: {
        type: String,
        required: 'date é obrigatório'
    }
});

