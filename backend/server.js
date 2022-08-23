const { sequelize } = require('./util/database')
const { app } = require('./app')
// const { initModels } = require('./utils/initModels');

sequelize
    .authenticate()
    .then(() => console.log('Database Postgress authenticate'))
    .catch(error => console.log(error))

// Models relations
// initModels();

sequelize
    .sync()
    .then(() => console.log("Database syncronized"))
    .catch(error => console.log(error))

app.listen(4000, () =>{
    console.log('app running')
})
