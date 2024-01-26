const Sequelize = require("sequelize")
const {sequelize} = require("./db")

const Heroes = sequelize.define("heroes", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    actor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    school_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    wand: {
        type: Sequelize.STRING,
        allowNull: false
    },
    alive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

const Schools = sequelize.define("schools", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Heroes.belongsTo(Schools, {
    foreignKey: 'school_id',
    targetKey: "id"
})

module.exports = {Heroes, Schools}