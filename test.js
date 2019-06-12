const test = require('tape')
const mappings = require('.')

test('sanity', t => {
  t.ok(true)
  t.end()
})

test('pass - all keys and values are correct', t => {
  const valid = {
    'coinbase': {
      '1m': 60,
      '5m': 300,
      '15m': 900,
      '1h': 3600,
      '6h': 21600,
      '1d': 86400
    },
    'binance': {
      '1m': '1m',
      '3m': '3m',
      '5m': '5m',
      '15m': '15m',
      '30m': '30m',
      '1h': '1h',
      '2h': '2h',
      '4h': '4h',
      '6h': '6h',
      '8h': '8h',
      '12h': '12h',
      '1d': '1d',
      '3d': '3d',
      '1w': '1w',
      '1M': '1M'
    }
  }
  t.deepEquals(valid, mappings)
  t.end()
})
