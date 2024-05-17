let metn = prompt("Metni daxil edin:");
let herf = prompt("herfi daxil edin");

function herfTapan (herf){
   let count = 0;
for (let i = 0; i < metn.length; i++) {

    let cavab = metn.charAt(i);
    if (cavab.toLowerCase() == herf.toLowerCase()) {
        count++;
    }
    
}
return count;
}

let tap = herfTapan(herf);
alert(`${metn}-in icinde ${tap}-dene ${herf}-herfi var!!`);
