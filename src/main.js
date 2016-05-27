function printInventory(inputs){
    var scores = [60, 80, 90];
    var grades = ['D', 'C', 'B', 'A']
    for(var i=0;i<scores.length;i++){
        if(inputs<scores[i]){
            return grades[i];
        }
    }
    return grades[i]
}