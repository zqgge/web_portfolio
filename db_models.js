const { Client } = require('pg')

// just for the local development, changin later
const client = new Client({
    user: 'local_user',
    host: 'localhost',
    database: 'portfolio_db',
    password: '1234',
    port: '5432'
})

client.connect()

// database functions ..

// gets all projects from db
const getProjects = () => {
    return new Promise(function(resolve, reject) {
        client.query('SELECT * FROM project', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows)
        })
    })
}

module.exports = {
    getProjects
}