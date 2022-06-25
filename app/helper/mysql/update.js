const mysql = require('mysql2');
const connection = require('../../config/mysql');

const update = (table, data) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE ${table} SET`
        const key = Object.keys(data)
        const value = []
      
        // length to know position or array
        let length = key.length
        length -= 1
        let index
      
        for (let i = 0; i < key.length; i++) {
          if (key[i] !== 'id' && key[i] !== 'table') {
            
            index = key.indexOf(key[i])
            if (index !== length) {
              sql += ` ${key[i]}=?,`
              value.push(data[key[i]])
            } else {
              sql += ` ${key[i]}=?`
              value.push(data[key[i]])
            }
          }
        }
      
        
        sql += ' WHERE id=?'
        value.push(data.id)

        connection.query(sql, value, (err, result, rows) => {
            if(err){
                console.log(err);
                reject(err)
            }

            resolve(result);
        })
    })
}

module.exports = update;