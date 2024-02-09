
let a = 1;

while (a < 5) {
    console.log(a);
    a++;
}

let obj = {
    name : "ajay",
    role : "programmer",
    college : "WCE",
    prn : 54

}

for (const key in obj) {
        const element = obj[key];
        console.log(key , element);
    
}


for (const c of "object") {
    console.log(c)
}

