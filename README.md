<div align="center">
  <img src=".github/static/logo.png" alt="fundamentus logo" height="40px">
  <div><code>npm install fundamentus --save</code></div>
  <br>
  <p>
    Fundamentus's stocks info web scraper
  </p>
  <p>

[![Maintainability](https://api.codeclimate.com/v1/badges/67e05f0d008dbe7fb452/maintainability)](https://codeclimate.com/github/lfreneda/fundamentus/maintainability)

  </p>
  <small>
    Built with ❤ by 
      <a href="https://github.com/lfreneda">Luiz Freneda</a> and
      <a href="https://github.com/lfreneda/fundamentus/graphs/contributors">contributors</a>
  </small>
</div>

---

:exclamation: | WIP: Working in progress and we need you, pull requests are welcome.
---: | :---

:pray: | Pô pessoal da Fundamentus, libera uma API pra a gente pls ;__;
---: | :---

<div align="center">
  <img height="15px" src=".github/static/separator.png"/>
</div>

## Installation

This client is intended for server side use only.

```
npm install fundamentus --save
```

<div align="center">
  <img height="15px" src=".github/static/separator.png"/>
</div>

## Playground

You can run and watch everything working fine at [bin/playground.js](https://github.com/lfreneda/fundamentus/blob/master/bin/playground.js) script

```
node bin/playground.js
```

<div align="center">
  <img height="15px" src=".github/static/separator.png"/>
</div>

## Usage

```js
const fundamentus = require('fundamentus')
```

<div align="center">
  <img height="15px" src=".github/static/separator.png"/>
</div>

### getStocksInfo

```js
const stocks = await fundamentus.getStocksInfo()
// [
//     {
//         "Papel": "BIDI11",
//         "Cotação": 61.08,
//         "P/L": 1951.98,
//         "P/VP": 6.08,
//         "PSR": 0,
//         "Div.Yield": 0.0007000000000000001,
//         "P/Ativo": 0,
//         "P/Cap.Giro": 0,
//         "P/EBIT": 0,
//         "P/Ativ Circ.Liq": 0,
//         "EV/EBIT": 0,
//         "EV/EBITDA": 0,
//         "Mrg Ebit": 0,
//         "Mrg. Líq.": 0,
//         "Liq. Corr.": 0,
//         "ROIC": 0,
//         "ROE": 0.0031,
//         "Liq.2meses": 299158000,
//         "Patrim. Líq": 8637480000,
//         "Dív.Brut/ Patrim.": 0,
//         "Cresc. Rec.5a": 0.3531
//     },
//     {
//         "Papel": "BBTG12",
//         "Cotação": 3.15,
//         "P/L": 37998,
//         "P/VP": 33248.3,
//         "PSR": 0,
//         "Div.Yield": 0,
//         "P/Ativo": 0,
//         "P/Cap.Giro": 0,
//         "P/EBIT": 0,
//         "P/Ativ Circ.Liq": 0,
//         "EV/EBIT": 0,
//         "EV/EBITDA": 0,
//         "Mrg Ebit": 0,
//         "Mrg. Líq.": 0,
//         "Liq. Corr.": 0,
//         "ROIC": 0,
//         "ROE": 0.875,
//         "Liq.2meses": 0,
//         "Patrim. Líq": 8000,
//         "Dív.Brut/ Patrim.": 0,
//         "Cresc. Rec.5a": 0
//     },
//     ...
// ]
```

<div align="center">
  <img height="15px" src=".github/static/separator.png"/>
</div>

## Pull Requests

- **Add tests!** Your patch won't be accepted if it doesn't have tests.
- **Document any change in behaviour**. Make sure the README and any other
  relevant documentation are kept up-to-date.
- **Create topic branches**. Don't ask us to pull from your master branch.
- **One pull request per feature**. If you want to do more than one thing, send
  multiple pull requests.

<div align="center">
  <img height="15px" src=".github/static/separator.png"/>
</div>

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.

<div align="center">
  <br/>
  <br/>
  <br/>
  <br/>
</div>