const people = [
    {
        Parameter: "Flag",
        Output: "Got Tricket? Try another"
    },
    {
       Parameter: "another",
        Output: "Wow...! Fantastic now Try falg"
    },
    {
        Parameter: "falg",
        Output: "Wow...! Amazing u r on the way now Try VORMS"
    },
   {
    Parameter:"VORMS",
    Output:"Congrats u got the flag!!! {7R1_Ky_R1g5t}<br><br>But if u searched <b>'Anything'</b>, u would get this more easily."
},
    {
        Parameter:"Anything",
        Output:"Congrats u got the flag!!! {7R1_Ky_R1g5t}"
    }
];

function searchPerson() {

    const searchText = document.getElementById("search").value.toLowerCase();

    const person = people.find(p =>
        p.Parameter.toLowerCase() === searchText
    );

    const result = document.getElementById("result");

    if(person){
        result.innerHTML = `
            <p>parameter: ${person.Parameter}</p>
            <p>Search Results: ${person.Output}</p>
        `;
    }
    else{
        result.innerHTML = "<h3>Nothing</h3>";
    }

}