canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=2
ctx.arc(500, 300, 25, 0, 2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value
mousex=e.clientX-canvas.offsetLeft
mousey=e.clientY-canvas.offsetTop
circle(mousex, mousey)
}
function circle(mousex, mousey){
    ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(mousex, mousey, 25, 0, 2*Math.PI)
ctx.stroke()
}