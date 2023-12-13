/*
    ** Logic to fetch records data from localStorage
    ** @Return it to leaderboard.html as table
    ** Condition if record is empty return table with string text
*/
function show_leadership(){
    var tables = "";
    let records = JSON.parse(localStorage.getItem('records'))
    if(records !== null){
        records.forEach((record, count)=> {
            tables += "<tr>" + 
            "<td>"+ ++count  +"</td>" +
                "<td>"+ record.username  +"</td>" +
                "<td>"+ record.fullname  +"</td>" +
                "<td>"+ record.trials  +"</td>" +
                "<td>"+ record.score  +"</td>" +
            
            "</tr>"
        });
    }
    else{
        tables += `<tr><td><h2>No record sign up / login and start playing</h2></td></tr>`;
    }
   
    console.log(tables)
    document.getElementById("table").innerHTML =  tables ;
}

show_leadership();