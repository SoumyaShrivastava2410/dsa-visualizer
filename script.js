let arr = [50, 30, 80, 20, 60];
let i = 0;
let j = 0;

let box = document.getElementById("arrayContainer");
let generate = document.getElementById("generateBtn");

let next = document.createElement("button");
next.innerText = "NEXT STEP";
document.querySelector(".controls").appendChild(next);

function display() {
    box.innerHTML = "";

    arr.forEach((x, k) => {
        let bar = document.createElement("div");

        bar.className = "bar";
        bar.style.height = x * 3 + "px";
        bar.innerText = x;

        if (k == j || k == j + 1)
            bar.style.backgroundColor = "red";

        box.appendChild(bar);
    });
}

display();

next.onclick = function() {

    if (i >= arr.length - 1)
        return;

    if (j < arr.length - i - 1) {

        if (arr[j] > arr[j + 1])
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        j++;

    } else {

        j = 0;
        i++;
    }

    display();
};

generate.onclick = function() {

    arr = [];

    for (let k = 0; k < 5; k++)
        arr.push(Math.floor(Math.random() * 90) + 10);

    i = 0;
    j = 0;

    display();
};
