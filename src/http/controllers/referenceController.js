/* eslint-disable class-methods-use-this */
class ReferenceController {
  async create(req, res) {
    res.json(req);
  }
}

module.exports = new ReferenceController();
