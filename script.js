let btn = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");
// let player1=prompt("Enter 1st player Name :");
// let player2=prompt("Enter 2nd player Name :");
let turnX = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
document.getElementById("msg").innerText ="Player 1 Chance"
let count=0;
btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX === true) {
            box.innerHTML = "X";
            turnX = false;
            document.getElementById("msg").innerText ="Player 2 Chance"
        } else {
            box.innerHTML = "0";
            turnX = true;
            document.getElementById("msg").innerText ="Player 1 Chance"
        }
        box.disabled = true;
        cheakWinner();
        
    count++;
    if (count==9) {
        drawMatch();
    }
    });
    
});
let cheakWinner = () => {
    for (const pattern of winPattern) {
        let pos1Val = btn[pattern[0]].innerText;
        let pos2Val = btn[pattern[1]].innerText;
        let pos3Val = btn[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                if (pos2Val == "X") {
                    var winner = "Player 1"
                } else {
                    var winner = "Player 2"
                }
                let msgRed=document.getElementById("msg");
                msgRed.style.color="red";
                msgRed.innerText = `Winner is ${winner}`;
                document.querySelector("#newGame").classList.toggle("show");
                btn.forEach(box => {
                    box.disabled = true;
                });

            } 
        }
    }
}

function drawMatch(){
    let drawRED=document.getElementById("msg");
    drawRED.style.color="red";
    drawRED.innerText = "Match is draw";
    document.querySelector("#newGame").classList.toggle("show");
}


document.querySelector("#newGame").addEventListener("click",()=>{
    window.location.href="index.html";
})
document.querySelector("#reset-btn").addEventListener("click",()=>{
    window.location.href="index.html";
})