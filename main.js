// Vars
var Flag = [0,0,0,0,0,0,0,0,0,0]


// CheckBox
const l9 = document.getElementById("l9");
const l8 = document.getElementById("l8");
const l7 = document.getElementById("l7");
const l6 = document.getElementById("l6");
const l5 = document.getElementById("l5");
const r4 = document.getElementById("r4");
const r3 = document.getElementById("r3");
const r2 = document.getElementById("r2");
const r1 = document.getElementById("r1");
const r0 = document.getElementById("r0");
// Div Hand
const hl9 = document.getElementById("hl9");
const hl8 = document.getElementById("hl8");
const hl7 = document.getElementById("hl7");
const hl6 = document.getElementById("hl6");
const hl5 = document.getElementById("hl5");
const hr4 = document.getElementById("hr4");
const hr3 = document.getElementById("hr3");
const hr2 = document.getElementById("hr2");
const hr1 = document.getElementById("hr1");
const hr0 = document.getElementById("hr0");


// Input

l9.addEventListener("change", function () {
    hl9.classList.toggle("off");
    flagToggle(9);
})

l8.addEventListener("change", function () {
    hl8.classList.toggle("off");
    flagToggle(8);
})

l7.addEventListener("change", function () {
    hl7.classList.toggle("off");
    flagToggle(7);
})

l6.addEventListener("change", function () {
    hl6.classList.toggle("off");
    flagToggle(6);
})

l5.addEventListener("change", function () {
    hl5.classList.toggle("off");
    flagToggle(5);
})

r4.addEventListener("change", function () {
    hr4.classList.toggle("off");
    flagToggle(4);
})

r3.addEventListener("change", function () {
    hr3.classList.toggle("off");
    flagToggle(3);
})

r2.addEventListener("change", function () {
    hr2.classList.toggle("off");
    flagToggle(2);
})

r1.addEventListener("change", function () {
    hr1.classList.toggle("off");
    flagToggle(1);
})

r0.addEventListener("change", function () {
    hr0.classList.toggle("off");
    flagToggle(0);
})

// Functions

function flagToggle(number) {
    Flag[number]++;
    if (1 < Flag[number]) Flag[number] = 0;
}

function check() {
    // Flag = [0,0,0,0,0,0,0,0,0,0]
    for (let i = 0; i < 5; i++) {
        if (document.querySelector("#r"+i+" .off") == true) Flag[i] = 1;
    }
    for (let i = 5; i < 10; i++) {
        if (document.querySelector("#l"+i+" .off")) Flag[i] = 1;
    }

    var load = Flag[9]*1000000000+Flag[8]*100000000+Flag[7]*10000000+Flag[6]*1000000+Flag[5]*100000+Flag[4]*10000+Flag[3]*1000+Flag[2]*100+Flag[1]*10+Flag[0]*1;
    var calc = 512*Flag[9]+256*Flag[8]+128*Flag[7]+64*Flag[6]+32*Flag[5]+16*Flag[4]+8*Flag[3]+4*Flag[2]+2*Flag[1]+1*Flag[0];
    
    document.getElementById("two").innerText = load;
    document.getElementById("ten").innerText = calc;
}

setInterval(() => {
    check();
}, 0);