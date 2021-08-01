let c = document.getElementById("canvas")
let ctx = c.getContext("2d")
ctx.globalCompositeOperation='destination-over';


let colors = ["#324851", "#34675C", "#7DA3A1", "#cccccc"]

c.width = window.innerWidth
c.height = window.innerHeight

let x = []
let y = []
let dx = []
let dy = []
let rad = 5
let cloning = 50

for (j = 0; j < cloning; j++) {
    x[j] = Math.floor(Math.random() * c.width)
    y[j] = Math.floor(Math.random() * c.height)
    dx[j] = Math.floor(Math.random() * 3) + 1
    dy[j] = Math.floor(Math.random() * 3) + 1
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, c.width, c.height)
    for (i = 0; i < cloning; i++) {
        ctx.beginPath()
        ctx.arc(x[i], y[i], rad, 0, 2 * Math.PI)
        ctx.fillStyle = colors[i % 4]
        ctx.fill()

        if (x[i] + rad > c.width || x[i] - rad < 0) {
            dx[i] = -dx[i]
        }
        if (y[i] + rad > c.height || y[i] - rad < 0) {
            dy[i] = -dy[i]
        }
        
        x[i] += dx[i]
        y[i] += dy[i]
    }
    ctx.fillStyle = colors[0]
    ctx.beginPath()
    ctx.moveTo(0, c.height)
    ctx.lineTo(c.width, c.height)
    ctx.lineTo(c.width, c.height - (c.height * 30 / 100))
    ctx.closePath()
    ctx.fill()
}
animate()

window.onscroll = () => {
    let wsc = document.body.scrollTop || document.documentElement.scrollTop
    
    let nama = document.getElementById("nama")
    nama.style.transform = `translate(0, ${wsc / 2}%)`
    
    let downBtn = document.getElementById("downBtn")
    downBtn.style.transform = `translate(0, ${wsc / 2}%)`

    let icons = document.getElementById("icons")
    icons.style.transform = `translate(0, ${wsc / 2}%)`

    let canvas = document.getElementById("canvas")
    canvas.style.transform = `translate(0, ${wsc / 30}%)`

    // let jaboutme = document.getElementById("jaboutme")

    let bungkus_judul = document.getElementsByClassName("bungkus-judul")
    let bungkus = document.getElementsByClassName("bungkus")
    
    for(i = 0; i < bungkus_judul.length; i++) {
        if (wsc > bungkus[i].offsetTop - 400) {
            bungkus_judul[i].style.opacity = "1"
            bungkus_judul[i].style.transition = "all 1s"
        } else {
            bungkus_judul[i].style.opacity = "0"
            bungkus_judul[i].style.transition = "all 1s"
        }
    }

    if (wsc > bungkus[0].offsetTop) {
        canvas.style.opacity="0"
        // bungkus[0].style.position= "sticy"
    } else {
        canvas.style.opacity="1"
    }


}