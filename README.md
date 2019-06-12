# SYNOPSIS

📖Normalize human readable timeframe strings to the respective exchange format.

## USAGE

```sh
npm i -S joemccann/timeframe-exchange-mappings
```

In your node.js app:

```js
const {
  binance,
  coinbase
} = require('timeframe-exchange-mappings')

console.log(binance['1d']) // '1d'

console.log(coinbase['1d']) // 86400

```

## TESTS

```sh
npm i -D
npm test
```

## LICENSE

MIT
