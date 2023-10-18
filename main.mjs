import { parseAst } from "rollup/parseAst";

const ast = parseAst("const x = true");

console.log(ast);
