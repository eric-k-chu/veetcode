import { fetch } from 'bun'

const biome = Bun.file('biome.json')

const foo = await biome.json()

const bar = await fetch('https://jsonplaceholder.typicode.com/todos/1')

console.log(await bar.json())
