/*первая задача
for (let symvol="#";symvol.length < 8;symvol = symvol + "#") {
    console.log(symvol);

}
*/

/*задача 2
for (let chet = 1; chet <= 100; chet += 1) {
    if (chet % 3 == 0) {
        if (chet % 5 == 0) {
            console.log("FuzzyBuzzy35");
        }
        console.log("Fuzzy3");
    }
    else if (chet % 5 == 0) {
        console.log("Buzzy5");
    }
    else {
        console.log(chet); 
    }
}
*/
/*
let day1 = {
    squirrel: false,
    events: ["работал", "трогал дерево", "ел пиццу", "бегал"] 
};
console.log(day1.squirrel);
*/

let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["работал", "трогал дерево", "ел лазанью"], false);

