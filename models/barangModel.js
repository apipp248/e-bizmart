const mongoose = require("mongoose");

const barangSchema = new mongoose.Schema({
    id_kategori: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Kategori",
        required: true
    },
    nama_barang: {
        type: String,
        required: true
    },
    gambar_barang: {
        type: String,
        required: true
    },
    harga_barang: {
        type: Number,
        required: true
    },
    keterangan_barang: {
        type: String,
        required: true
    },
    stok_barang: {
        type: Number,
        required: true
    },
    exp_barang: {
        type: Date,
        required: true
    },
    status_ketersidaan: {
        type: String,
        enum: ['Tersedia', 'Habis', 'Pre-Order']
    }
});

module.exports = mongoose.model("Barang", barangSchema);