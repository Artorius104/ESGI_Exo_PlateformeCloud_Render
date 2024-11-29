const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgresql://esgi_plateformecloud_exo_render_db_user:AJl3IyyuXmnSd1Au5Y54OrFVg3Hwt9cL@dpg-ct4uo156l47c73fbj2vg-a/esgi_plateformecloud_exo_render_db', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
