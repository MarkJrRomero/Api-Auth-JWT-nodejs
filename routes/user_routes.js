const auth = require('../middlewares/auth');
const controller = require("../controllers/user_controller");

const UserRoutes = (app) => {
    app.post('/login', (req, res) => {
        return controller.login(req, res);
    })

    app.post('/register', (req, res) => {
        return controller.register(req, res);
    })

    app.get('/validar', auth, (req, res) => {
        res.status(200).json({
            "status" : "success",
            "statusCode" : 200,
            "message" : "Vaya... con que conoces la llave, ok aquí tienes las cryptos ;)",
            "data" : {
                "crypto" : "BTC",
                "cantidad" : 5,
                "valor" : 99999
            } 
        });
    })
}

module.exports = UserRoutes