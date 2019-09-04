//первая задача
//for (let symvol="#";symvol.length < 8;symvol = symvol + "#") {
//    console.log(symvol);

//}

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