const {Barang} = require('../models')
const {verifyToken} = require('../helper/access_token')

class Controller {
  static createBarang(req, res, next) {
    let access_token = req.headers.access_token;
    let decode = verifyToken(access_token);

    let newBarang = {
      nama: req.body.nama,
      quantity: req.body.quantity,
      userId: decode.id,
    };
    Barang.create(newBarang)
      .then((data) => {
        console.log(data, "<<< data");
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static getBarang(req, res, next) {
    Barang.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static getBarangById(req, res, next) {
    let id = req.params.id
    Barang.findOne({where: { id }})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static updateBarang(req, res, next) {
    let access_token = req.headers.access_token;
    let decode = verifyToken(access_token);
    let barangId = req.params.id;

    let newBarang = {
      nama: req.body.nama,
      quantity: req.body.quantity,
      userId: decode.id,
    };

    Barang.update(newBarang, { where: { id: barangId } })
      .then((data) => {
        if (data[0] === 1) {
          res.status(200).json({ message: "Barang updated successfully" });
        } else {
          throw {
            name: "custom",
            msg: "Barang not found",
            status: 404,
          };
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static deleteBarang(req, res, next) {
    let barangId = req.params.id;
    Barang.destroy({ where: { id: barangId } })
      .then((data) => {
        if (data === 1) {
          res.status(200).json({ message: "Barang deleted successfully" });
        } else {
          throw {
            name: "custom",
            msg: "Barang not found",
            status: 404,
          };
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = Controller;
