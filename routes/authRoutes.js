const express = require('express')
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewars/authMiddleware')
const connection = require('../config/db')

const router = express.Router()

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/protected', authMiddleware, (req, res) => {
    const userId = req.userId;

    // Consulta para obtener el nombre de usuario asociado con el userId
    connection.query('SELECT username FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            console.error("Error al consultar la base de datos:", err);
            return res.status(500).send("Error al obtener el nombre de usuario");
        }

        if (results.length === 0) {
            return res.status(404).send("Usuario no encontrado");
        }

        const username = results[0].username;
        res.status(200).send(`Hola ${username}`);
    })
})

module.exports = router