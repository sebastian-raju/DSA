function eligibleToVote (age){
    if(age >= 18){
        return "Yes, eligible to Vote"
    }
    return "Not eligible to vote"
}


const result = eligibleToVote(18);

console.log(result);