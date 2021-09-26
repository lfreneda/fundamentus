const cheerio = require('cheerio')

const toFloat = (value) => {
  value = value.replace('.', '').replace('.', '').replace('.', '').replace('.', '').replace('.', '').replace('.', '')
  value = value.replace(',', '.')
  if (value.endsWith('%')) {
    return parseFloat(value) / 100
  } else if (isNaN(value)) {
    return value
  } else {
    return parseFloat(value)
  }
}

const toReadableStocksResult = (html) => {
  const $ = cheerio.load(html)
  const columnNameByIndexMap = {}
  const columns = $('table#resultado thead tr th')
  let index = 0
  for (const column of columns) {
    const columnName = $(column).text()
    columnNameByIndexMap[index] = columnName
    index++
  }
  const stocks = []
  const lines = $('table#resultado tbody tr')
  for (const line of lines) {
    const stock = {}
    let index = 0
    const values = $(line).find('td')
    for (const value of values) {
      stock[columnNameByIndexMap[index]] = toFloat($(value).text())
      index++
    }
    stocks.push(stock)
  }
  return stocks
}

module.exports = toReadableStocksResult
