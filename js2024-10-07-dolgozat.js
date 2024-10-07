console.log(`A neved: ${name}`)
let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes."
let regex, result
// Oldd meg az alábbi feladatokat!
// Hozz létre függvényeket, melyek visszatérési értéke a megoldás.
// A függvény bemeneti értéke a fenti text, a kimeneti érték a feladatban megadott feltétel szerinti tömb.
// Feladatok:
// numberLength2Or3 - Olyan számok, melyek 2 vagy 3 számjegyet tartalmaznak
function TwoOrThreeDigits(){
    regex = /\b[0-9]{2,3}\b/g
    result3 = text.match(regex)
    array.push(result3);
}
// startsWithEven - Olyan számok, melyek páros számmal kezdődnek
function StartWithEvenNumber(){
    regex = /\b[2,4,6,8][0-9]*\b/g
    result3 = text.match(regex)
    array.push(result3);
}
// startsWithNumber - Olyan szavak, melyek számmal kezdődnek és betűvel végződnek
function StartWithEvenNumber(){
    regex = /\b[0-9][a-z]*[A-Z]*\b/g
    result3 = text.match(regex)
    array.push(result3);
}
// capitalized - Olyan szabak, melyek nagybetűből állnak
// capitalizedLengthMin3 - Olyan szavak, melyek nagybetűvel kezdődnek és legalább 3 betűsek
// startsWithVowel - Olyan szavak, melyek magánhangzóval kezdődnek

//
// A feladatokat a GitHubra töltsd fel és a linkjét add meg.
// A függvény neve a feladatban van megadva!