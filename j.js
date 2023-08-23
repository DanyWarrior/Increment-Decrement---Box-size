
// ------------------ CAPTURING ELEMENTS FROM HTML ------------
let boxContainer = document.getElementById("movingBox-container")
let movingBox = document.getElementById("moving-box")

let incrButn = document.getElementById("increment")
let decrButn = document.getElementById("decrement")

let inputIncrement = document.getElementById("increment-value")
let value_inputIncrement = parseInt(inputIncrement.value)

let inputDecrement = document.getElementById("decrement-value")
let value_inputDecrement = parseInt(inputDecrement.value)


let x = 50
let y = 50
let rotate = 0


// // fix this to change color after 100px 
// if (movingBox.style.width >= `${100}px` && movingBox.style.height >= `${100}px`){
//     // y = 25
//     // x = 25
//     movingBox.style.width = `${50}px`
//     movingBox.style.height = `${50}px`
//     movingBox.style.backgroundColor = "red"
// }




// --------------------- BUTTONS LISTENING ---------

incrButn.addEventListener("click", ()=>{
    x += x * (20/100)
    y += y * (20/100)
    rotate += 90

    inputIncrement.value = value_inputIncrement += 1 
    inputDecrement.value = value_inputDecrement -= 1
    
    movingBox.style.transition = "all 0.5s"
    movingBox.style.transform = `rotate(${rotate}deg)`
    movingBox.style.width = `${x}px`
    movingBox.style.height = `${y}px`

    console.log(`\nwidth -> ${movingBox.style.width}`)
    console.log(`height -> ${movingBox.style.height}`)
})


decrButn.addEventListener("click", ()=>{
    x -= x * (20/100)
    y -= y * (20/100)
    rotate -= 90

    
    inputIncrement.value = value_inputIncrement -= 1
    inputDecrement.value = value_inputDecrement += 1



    movingBox.style.transition = "all 0.5s"
    movingBox.style.transform = `rotate(${rotate}deg)`
    movingBox.style.width = `${x}px`
    movingBox.style.height = `${y}px`

    console.log(`\nwidth -> ${movingBox.style.width}`)
    console.log(`height -> ${movingBox.style.height}`)
})

//----------------------------------------------------







