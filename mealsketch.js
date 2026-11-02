let myData
async function setup() {
    createCanvas(1000,400);
    // Load data
    myData = await loadJSON('data.json');
    console.log(myData);
}

function draw() {
    background(220);

    for(let i=0; i < myData.length; i++) {
        let meal = myData[i]
        let x = (i+1) * 100
        let y
        if (meal.type === 'breakfast') {
            y = height - height * 0.1;
        } else if (meal.type === 'lunch') {
            y = height - height * 0.75;
        } else if (meal.type === 'dinner') {
            y = height - height * 0.5;
        }
        else if (meal.type === 'dessert') {
            y = height - height * .25;
        }
        //circle(x, y, 50);
        if (meal.preparation === "cooked") {
            fill(0);
            circle(x, y, 50);
        }
        if (meal.preparation === "leftovers") {
            fill (0)
            arc(x, y, 50, 50, 0, PI);
        }
        if (meal.preparation === "dining hall") {
            fill(0);
            rect(x-25, y-25, 50, 50);
        }
        if (meal.preparation === "snack") {
            fill(0);
            triangle(x-25, y-25, x+25, y-25, x, y+25);
        }
    }
}
function drawDrink(drink) {
    if(drink === "water") {
        fill (0)
        circle(0, 0, 20)
    }
    else if(drink === "diet coke") {
        fill(0)
        square(0,0,20)
    }
    else if(drink === "chai latte") {
        fill(0)
        triangle(0, 0, 20, 20, 20, 0)
    }
    let gap = slice * 0.3
    let pie 
    line(0,0, 20, 0)
    
        
}