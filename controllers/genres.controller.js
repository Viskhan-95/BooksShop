const { json } = require("express/lib/response");
const Genre = require("../modеls/Genre.model");

module.exports.genresController = {
    getGenres: (reg, res) => {
        Genre.find()
        .then((data) => {
            res.json(data)
        })
    },
    getGenreById: (reg, res) => {
        Genre.findById(reg.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    addGenre: (reg, res) => {
        Genre.create({
            name: reg.body.name,
            diskription: reg.body.diskription
        }).then(() => {
            res.json("Жанр добавлен")
        })
    },
    delGenre: (reg, res) => {
        Genre.findByIdAndRemove(reg.params.genreId)
        .then(() => {
            res.json("Жанр удален")
        }).catch(() => {
            res.json("Нельзя удалить привязанный к книгам жанр")
        })
    },
    updateGenre: (reg, res) => {
        Genre.findByIdAndUpdate(reg.params.genreId, {
            $set: {
                name: reg.body.name,
                diskription: reg.body.diskription,
            }
        }).then(() => {
            res.json("Изменения в жанр внесены");
        })
    }
}