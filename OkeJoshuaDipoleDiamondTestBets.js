//declare function betting
function betting(userBet, betResult) {
    //compare lengths of both arrays
    if (userBet.length === betResult.length) {
        let scores = 0;
        for (let i = 0; i < userBet.length; i++) {
            if (userBet[i] == betResult[i]) {
                scores++;
            }
        }
        if (scores >= 3) {
            console.log('Jackpot');
        } else console.log('Sorry! Nojackpot!');
    }
}

let userbet = ["2-2", "2-0", "0-1", "0-1", "4-4"];
let results = "2-2, 2-0, 0-1, 3-3, 2-1";
//convert results to array
results = results.split(', ');
//check the bet
betting(userbet, results);