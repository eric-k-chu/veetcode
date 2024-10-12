const biome = Bun.file('biome.json')

const foo = await biome.json()

console.log(foo)
