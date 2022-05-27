const Author = require("../modеls/Author.model")

module.exports.authorsController = {
    getAuthors: (reg, res) => {
        Author.find()
        .then((data) => {
            res.json(data)
        })
    },
    getAuthorById: (reg, res) => {
        Author.find(reg.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    addAuthor: (reg, res) => {
        Author.create({
            name: reg.body.name,
            aboutAuthor: reg.body.aboutAuthor
        }).then(() => {
            res.json("Автор успешно добавлен")
        })
    },
    delAuthor: (reg, res) => {
        Author.findByIdAndRemove(reg.params.id)
        .then(() => {
            res.json("Автор удален")
        }).catch(() => {
            res.json("Нельзя удалить автора, к нему привязаны книги")
        })
    },
    updateAuthor: (reg, res) => {
        Author.findByIdAndUpdate(reg.params.id, {
            $set: {
                name: reg.body.name,
                aboutAuthor: reg.body.aboutAuthor
            }
        }).then(() => {
            res.json("Данные успешно изменены")
        })
    }
}