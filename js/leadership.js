function show_leadership(){
    var tables = "";
    let records = JSON.parse(localStorage.getItem('records'))

    records.forEach((record, count)=> {
        tables += "<tr>" + 
        "<td>"+ ++count  +"</td>" +
            "<td>"+ record.username  +"</td>" +
            "<td>"+ record.fullname  +"</td>" +
            "<td>"+ record.trials  +"</td>" +
            "<td>"+ record.score  +"</td>" +
        
        "</tr>"
    });

    document.getElementById("table").innerHTML = '<table>' + tables + '</table>';
}

show_leadership();