import abs, { max, min as minimo } from './funcoes';
import soma from './soma';
import multRenamed from './mult';
import * as sub from './sub';


console.log(soma(1,2));
console.log(multRenamed(10, 8));
console.log(max(10, 8));
console.log(minimo(10, 8));
console.log(max(abs(10), abs(-80)))

console.log(sub.aSUBb(10, 20));
console.log(sub.bSUBa(10, 20));