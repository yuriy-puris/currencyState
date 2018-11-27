const app = require('./app')
const config = require('./config/config')


app.listen(process.env.PORT || config.port, () => console.log(`Server start on port ${config.port} ...`))