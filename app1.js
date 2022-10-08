const producto = 'Monitor 27 pulgadas';

const producto2 = String(' Television de 27 pulgadas');
console.log(producto);
// length
console.log('punto length');
console.log(producto.length);
console.log(producto2);
console.log('indexOf Monitor')
// indexOf
console.log(producto.indexOf('Monitor'));
// includes
console.log(producto.includes('triada'));
console.log(producto.includes('Monitor'));
// .concat
console.log(producto.concat(producto2));

// trim()
const producto3 =  '     Monitor curvo TUF GAMING       ';
console.log(producto3)
console.log(producto3.trimStart());
console.log(producto3.trimEnd());

//metodo replace 
console.log(producto.replace('pulgadas', '"'));


// .slice para cortart
console.log(producto.slice(0,17));

// alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));


const user = 'Myz';
console.log(user.substring(0,1));
console.log(user.charAt(0));


// repeat permite repetir una cade de texto
const text = ' viaje '.repeat(3);
console.log(text);

console.log(`${producto} ${text}!!!`);

// metodo split
const text2 = 'viaje por el mundo un dia';
console.log(text2.split(" "));

// touppercase
console.log(producto.toUpperCase());

console.log(producto.toLocaleLowerCase());



