let color= [0 , 1 , 2 , 3, 4 , 5 , 6 , 7 , 8 , 9 ,'A' , 'B' ,'C' ,'D' ,'E' ,'F']
const random_hex_color_code = () => {
    return Math.floor(Math.random()*color.length)
  };


let clicked = document.getElementById("clicked")

clicked.addEventListener('click' , function() {
    let hexcolor = "#";
    for (let i = 0; i<6; i++)
    {
        hexcolor += color[random_hex_color_code()]
    }
    let body = document.querySelector("body")
    body.style.backgroundColor = hexcolor
    let content = document.getElementById("color")
    content.textContent= hexcolor
});



