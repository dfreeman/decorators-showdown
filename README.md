# Decorator Transpilation Showdown

## Instructions

Run `node index.js` to transpile each file in `input/` using each of three transpilers (Babel 6, Babel 7 and TypeScript) into a corresponding file in `output/`.

## Results

For the [`my-module`](input/my-module.js) file committed in the `input` directory, the output sizes for each transpiler are as follows:

| Contender | Lines | Bytes | Result |
| -- | -- | -- | -- |
| Babel 6 | 75 | 2482 | [resulting output](output/my-module.babel6.js)
| Babel 7 | 115 | 12330 | [resulting output](output/my-module.babel7.js)
| TypeScript | 43 | 1464 | [resulting output](output/my-module.typescript.js)

It's worth noting that this isn't necessarily an apples-to-apples comparison, as Babel 6 and TypeScript are both targeting Stage 1 of the decorators spec, while Babel 7 is targeting Stage 2.
