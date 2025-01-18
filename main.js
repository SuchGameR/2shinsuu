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


// Functions

// Input
function Input() {
    // True
    if (l9.checked == true) Flag[9] = 1;
    if (l8.checked == true) Flag[8] = 1;
    if (l7.checked == true) Flag[7] = 1;
    if (l6.checked == true) Flag[6] = 1;
    if (l5.checked == true) Flag[5] = 1;
    if (r4.checked == true) Flag[4] = 1;
    if (r3.checked == true) Flag[3] = 1;
    if (r2.checked == true) Flag[2] = 1;
    if (r1.checked == true) Flag[1] = 1;
    if (r0.checked == true) Flag[0] = 1;
    // False
    if (l9.checked == false) Flag[9] = 0;
    if (l8.checked == false) Flag[8] = 0;
    if (l7.checked == false) Flag[7] = 0;
    if (l6.checked == false) Flag[6] = 0;
    if (l5.checked == false) Flag[5] = 0;
    if (r4.checked == false) Flag[4] = 0;
    if (r3.checked == false) Flag[3] = 0;
    if (r2.checked == false) Flag[2] = 0;
    if (r1.checked == false) Flag[1] = 0;
    if (r0.checked == false) Flag[0] = 0;

    // Add & Remove Class tag: "off"

    if (l9.checked == true) hl9.classList.remove("off");
    if (l8.checked == true) hl8.classList.remove("off")
    if (l7.checked == true) hl7.classList.remove("off")
    if (l6.checked == true) hl6.classList.remove("off")
    if (l5.checked == true) hl5.classList.remove("off")
    if (r4.checked == true) hr4.classList.remove("off")
    if (r3.checked == true) hr3.classList.remove("off")
    if (r2.checked == true) hr2.classList.remove("off")
    if (r1.checked == true) hr1.classList.remove("off")
    if (r0.checked == true) hr0.classList.remove("off")
    // False
    if (l9.checked == false) hl9.classList.add("off")
    if (l8.checked == false) hl8.classList.add("off")
    if (l7.checked == false) hl7.classList.add("off")
    if (l6.checked == false) hl6.classList.add("off")
    if (l5.checked == false) hl5.classList.add("off")
    if (r4.checked == false) hr4.classList.add("off")
    if (r3.checked == false) hr3.classList.add("off")
    if (r2.checked == false) hr2.classList.add("off")
    if (r1.checked == false) hr1.classList.add("off")
    if (r0.checked == false) hr0.classList.add("off")
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
    Input();
    check();
}, 0);

function count() {
    Flag[0]++;
    r0.checked = true;
    if (1 < Flag[0]) {
        Flag[0] = 0;
        Flag[1]++;
        r0.checked = false;
        r1.checked = true;
    }
    if (1 < Flag[1]) {
        Flag[1] = 0;
        Flag[2]++;
        r1.checked = false;
        r2.checked = true;
    } 
    if (1 < Flag[2]) {
        Flag[2] = 0;
        Flag[3]++;
        r2.checked = false;
        r3.checked = true;
    }
    if (1 < Flag[3]) {
        Flag[3] = 0;
        Flag[4]++;
        r3.checked = false;
        r4.checked = true;
    }
    if (1 < Flag[4]) {
        Flag[4] = 0;
        Flag[5]++;
        r4.checked = false;
        l5.checked = true;
    }
    if (1 < Flag[5]) {
        Flag[5] = 0; 
        Flag[6]++;
        l5.checked = false;
        l6.checked = true;
    }
    if (1 < Flag[6]) {
        Flag[6] = 0;
        Flag[7]++;
        l6.checked = false;
        l7.checked = true;
    }
    if (1 < Flag[7]) {
        Flag[7] = 0; 
        Flag[8]++;
        l7.checked = false;
        l8.checked = true;
    }
    if (1 < Flag[8]) {
        Flag[8] = 0;
        Flag[9]++;
        l8.checked = false;
        l9.checked = true;
    }
    if (1 < Flag[9]) {
        Flag[9] = 0;
        l9.checked = false;
    }
}