function matrix(num) {
 
    function lines(a) {
 
        let thelineOne = (a + ' ').repeat(a);
 
        return thelineOne + '\n';
    }
 
    function reps(ass) {
        for (let i = 1; i <= ass; i++) {
            return lines(ass).repeat(ass-1);
        }
 
    }
    return lines(num) + reps(num);
  
}
