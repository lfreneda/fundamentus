const fundamentus = require('./../src/index')

const run = async () => {
  const stocks = await fundamentus.getStocksInfo()
  for (const stock of stocks) {
    console.log(JSON.stringify(stock, null, 2))
  }
}

run()
