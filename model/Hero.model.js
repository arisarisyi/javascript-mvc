const { response } = require("express")
const db = require("../config")

exports.getHero = (response) => {
  //query
  const sql = "SELECT * FROM `hero`"
  //execute data
  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    //response data
    const heroes = {
      title: "mobile-legend-list",
      data: JSON.parse(JSON.stringify(result))
      // parse mengambil string json dirubah jadi object js
      // stringify mengambil object js mengubahnya menjadi string json
    }

    response.render("index", { heroes })
    response.end()
  })
}

exports.getHeroById = (id, response) => {
  const sql = `SELECT * FROM hero WHERE id= ${id}`
  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    //response data
    const hero = {
      title: "DATA HERO BY ID",
      data: JSON.parse(JSON.stringify(result))
    }

    response.render("heroDetail", { hero })
    response.end()
  })
}

exports.updateById = (data, response) => {
  const id = data.id
  const name = data.name
  const role = data.role

  const sql = `UPDATE hero SET name = '${name}', role='${role}' WHERE id ='${id}'`

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    response.redirect("/hero")
    response.end()
  })
}

exports.addHero = (data, response) => {
  const name = data.name
  const role = data.role

  const sql = `INSERT INTO hero (name, role) VALUES ( '${name}','${role}')`

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    response.redirect("/hero")
    response.end()
  })
}

exports.removeHero = (id, response) => {
  const sql = `DELETE FROM hero WHERE id='${id}'`

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    response.redirect("/hero")
    response.end()
  })
}