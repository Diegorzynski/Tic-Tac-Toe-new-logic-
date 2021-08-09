const headText = document.getElementById('headText')
const boxes = Array.from(document.getElementsByClassName("box"));
const Reset = document.getElementById('Reset');
const sound_select = document.getElementById('select')


const Victories = {
    1: ["0","1","2"],
    2: ["3","4","5"],
    3: ["6","7","8"],
    4: ["2","5","8"],
    5: ["1","4","7"],
    6: ["0","3","6"],
    7: ["0","4","8"],
    8: ["2","4","6"]
};

const positions = {
    1: "Top",
    2: "Mid",
    3: "Bottom",
    4: "Right",
    5: "Mid",
    6: "Left",
    7: "Diagonal",
    8: "Diagonal"
}

var Player = {
    1: [],
    2: []
};

var emptyBoxes = [];
const player1 = "O";
const player2 = "X";
let currentPlayer = player1;


const grabBoxes = () => {
    boxes.forEach((box) => {
            box.addEventListener('click', boxClicked)
        });
};

 const boxClicked = (e) => {
     if(emptyBoxes.length != 10){
    //  let playSound = new Audio(scr = "Sound/whoosh.aac")
    //  playSound.play();
        const ID = e.target.id
        if(currentPlayer == player1 && !emptyBoxes[ID]){
         emptyBoxes[ID] = currentPlayer
          Player[1].push(ID)
         e.target.innerText = currentPlayer;
        
      } else  if (currentPlayer == player2 && !emptyBoxes[ID]){
          const ID = e.target.id
          emptyBoxes[ID] = currentPlayer
          Player[2].push(ID)
          e.target.innerText = currentPlayer;
          } 
          winner();
          currentPlayer = currentPlayer === player1 ? player2 : player1
        }
    };
   

     const winner = () => {
        for(j = 1; j <= 2; j++){
         for(i = 1; i <= 8; i++){
           let points_ = Player[j].filter(n => Victories[i].includes(n))
             if(points_.length == 3) {
               headText.style.color = "red"
               headText.innerText = `${currentPlayer} won ${positions[i]}!`
               emptyBoxes = ["F","U","L","L",9,9,9,9,9,9]
            } 
        }
    }
};

function Restart() {
    Reset.addEventListener('click', function(){
        headText.style.color = "#3e0249"
        emptyBoxes = []
        boxes.forEach((box) => {
            box.innerText = "";
            Player = {
                1: [],
                2: []
            }
            currentPlayer = player1;
            headText.innerText = "Let's play again!"
            setTimeout(() => {
                headText.innerText = "O starts"},1500);
        })
    })
};
 

grabBoxes();
Restart();
let playSound = () => {
    sound_select.play()
};

//put sounds to the boxes.
// msg de vencer piscar
// programar um bot





