
function prints() {
    document.write("<h1>Hello World</h1>");
}

for (let i = 0; i <=100; i++) {
    row.innerHTML+=`
    
        <div class="col">
            <div class="card shadow">
                <div class="card-body">
                    <h3 class="card-title">${i}</h3><hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure omnis officiis adipisci magni
                        accusamus ea rerum amet nesciunt tempora sed aspernatur, consequuntur unde voluptates, mollitia
                        perspiciatis error, fugit veniam!</p>
                </div>
            </div>
        </div>
    `;
    if (i == 50) {
        row.innerHTML+=`
        <div class="col">
            <div class="card shadow bg-danger-subtle">
                <div class="card-body">
                    <h3 class="card-title">${i}</h3><hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iure omnis officiis adipisci magni
                        accusamus ea rerum amet nesciunt tempora sed aspernatur, consequuntur unde voluptates, mollitia
                        perspiciatis error, fugit veniam!</p>
                </div>
            </div>
        </div>
    `;
    continue;
    }
}

console.log("Hello .net core students")

// OUTPUT
// alert
// document.write();
// console.log()
// innerHTML
// innerText
// value

console.warn("sfjhsbfhjbjhb")
console.error("Helolo World");

var obj={
    name:"Athul",
    age:99,
    Result:"Passed"
}
console.table(obj);

// Age=prompt("Enter Age");
// if (Age >= 18) {
//     alert("Eligble");
// } else {
//     alert("Not Eligble");
    
// }


// document.getElementsByClassName("haed")[''];