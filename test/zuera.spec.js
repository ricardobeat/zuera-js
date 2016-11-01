
const test  = require('tape')
const zuera = require('../')
const data  = require('../zuera.json')

test('zuera', (t) => {
    t.plan(4)

    t.ok(Array.isArray(zuera), 'is an array')

    t.equal(zuera.length, data.length, 'length is equal')
	t.equal(zuera[0], data[0], 'first item is equal')

	t.ok(typeof zuera.contains === 'function', 'exposes .contains()')

})

test('zuera.contains', (t) => {
    t.plan(3)
    t.ok(zuera.contains('bueiro onde DESCE o careca'))
    t.ok(zuera.contains('INFORMáTICA'))
    t.notOk(zuera.contains('biscoito'))
})

test('zuera by index', (t) => {
	t.plan(1)
	t.ok(zuera[0])
})
