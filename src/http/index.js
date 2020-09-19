const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('../http/middlewares/errorHandler');

/* Routes */
const Routes = require('./routes');

class HttpServer {
  constructor(config) {
    this.app = config.app;
    this.port = config.port;
    this.bodyLimit = config.bodyLimit;
  }

  start() {
    this.app.use(cors());
    this.app.use(bodyParser.json());

    /* Instatiate routes */
    this.app.use('/v1', Routes.v1);

    /* Status endpoint */
    this.app.get(['/info', '/status'], async (req, res, next) => {
      try {
        res.sendStatus(204);
      } catch (err) {
        next(err);
      }
    });

    this.app.use(errorHandler);
    this.app.listen(this.port);
  }
}

module.exports = HttpServer;
