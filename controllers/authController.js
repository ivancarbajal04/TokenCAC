const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../config/config')
const connection = require('../config/db')

exports.register = (req, res) => {
    const { username, password } = req.body

    const hashedPassword = bcrypt.hashSync(password, 8)

    connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
        if (err) {
          return res.status(500).send('Error registering user.');
        }
    
    const token = jwt.sign({id: results.insertId}, config.secretKey, {expiresIn:config.tokenExpiresIn})

    res.status(201).send({auth: true, token})

    })
}

exports.login = (req, res) => {

    const { username, password } = req.body;

    connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) {
          return res.status(500).send('Error on the server.');
        }
        if (results.length === 0) {
          return res.status(404).send('User not found.');
        }
    
        const user = results[0];

    const passwordIsValid = bcrypt.compareSync(password, user.password)

    if(!passwordIsValid) return res.status(401).send({auth:false, token: null})

    const token = jwt.sign({id:user.id}, config.secretKey, {expiresIn: config.tokenExpiresIn})

    res.status(200).send({auth: true, token})
    })

}