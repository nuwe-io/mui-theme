const { Dark, Light } = require('./src')
const themeMode = { dark: (type) => Dark(type), light: (type) => Light(type) }

module.exports = themeMode
