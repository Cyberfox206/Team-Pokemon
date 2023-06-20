let types = ['Herbe', 'Feu', 'Eau', 'Eau', 'Eau', 'Eau', 'Feu', 'Feu', 'Glace', 'Eau', 'Herbe', 'Eau', 'Glace', 'Feu', 'Eau', 'Feu', 'Feu', 'Herbe', 'Herbe', 'Feu', 'Herbe', 'Herbe', 'Eau', 'Eau', 'Herbe', 'Poison', 'Herbe', 'Herbe', 'Air', 'Eau', 'Feu'];
let string_r = "Air, Poison, Glace, Psychique, Insecte"
let string_n = "Eau, Feu, Herbe"

let cont_r = 0;
let cont_n = 0;
for (let i = 0; i < types.length; i++) {
    if (string_r.includes(types[i])) {
        cont_r++;
    }
    if (string_n.includes(types[i])) {
        cont_n++;
    }
}

console.log(cont_r, cont_n);