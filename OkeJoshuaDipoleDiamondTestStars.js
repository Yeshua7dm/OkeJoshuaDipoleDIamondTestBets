function starsToTree(number) {
    let stars = '';
    for (let i = number; i > 0; i--) {
        let starsLine = repeatStringNumTimes('*', i);
        stars += starsLine + "\n";
    }
    return stars;
}

console.log(starsToTree(6));