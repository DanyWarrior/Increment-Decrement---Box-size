
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








// --------------------- BUTTONS LISTENING ---------

incrButn.addEventListener("click", ()=>{
    x += x * (20/100)
    y += y * (20/100)
    rotate += 90

    inputIncrement.value = value_inputIncrement += 1 
    inputDecrement.value = value_inputDecrement = 0
    
    movingBox.style.transition = "all 0.5s"
    movingBox.style.transform = `rotate(${rotate}deg)`
    movingBox.style.width = `${x}px`
    movingBox.style.height = `${y}px`

    if (x > 550 && y > 550){
        console.log("rata")
        x = 50
        y = 50
        movingBox.style.width = `${x}px`
        movingBox.style.height = `${y}px`
        movingBox.style.backgroundColor = "beige"
        movingBox.classList.remove("shadowww")
    }

    if ( x > 17 && y > 17){
        movingBox.style.backgroundColor = "beige"
        movingBox.classList.remove("shadowww")
    }

    if (x > 490 && y > 490){
        movingBox.style.backgroundColor = "red"
        movingBox.classList.add("shadowww")
    }

    console.log(`\nwidth -> ${movingBox.style.width}`)
    console.log(`height -> ${movingBox.style.height}`)
})




decrButn.addEventListener("click", ()=>{
    x -= x * (20/100)
    y -= y * (20/100)
    rotate -= 90

    inputIncrement.value = value_inputIncrement = 0
    inputDecrement.value = value_inputDecrement += 1

    movingBox.style.transition = "all 0.5s"
    movingBox.style.transform = `rotate(${rotate}deg)`
    movingBox.style.width = `${x}px`
    movingBox.style.height = `${y}px`
    
    if (x < 550 && y < 550){
        movingBox.style.backgroundColor = "beige"
        movingBox.classList.remove("shadowww")
    }

    if (x < 20 && y < 20){
        movingBox.style.backgroundColor = "red"
        movingBox.classList.add("shadowww")
    }

    if (x < 15 && y < 15){
        console.log("rata")
        x = 50
        y = 50
        movingBox.style.width = `${x}px`
        movingBox.style.height = `${y}px`
        movingBox.style.backgroundColor = "beige"
        movingBox.classList.remove("shadowww")
    }

    console.log(`\nwidth -> ${movingBox.style.width}`)
    console.log(`height -> ${movingBox.style.height}`)
})

//----------------------------------------------------







