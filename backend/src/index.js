const app = require('./app')
const { PORT } = require('./utils/config')

const init = () => {
  app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`))
}

init()
