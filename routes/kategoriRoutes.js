const express = require("express");
const router = express.Router();
const kategoriController = require("../controllers/kategoriControllers");

router.get("/daftar", kategoriController.getDaftarKategori);
router.get("/tambah", kategoriController.getTambahKategori);
router.get("/edit/:id", kategoriController.getEditKategori);
router.post("/tambah", kategoriController.tambahKategori);
router.post("/edit/:id", kategoriController.editKategori);
router.get("/delete/:id", kategoriController.deleteKategori);



module.exports = router;