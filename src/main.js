const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d') // context type: https://developer.mozilla.org/fr/docs/Web/API/HTMLCanvasElement/getContext#typedecontexte

/**
 *  CONFIG
 */

const ROWS = 6
const COLS = 6

const red = '#E83A4E'
const yellow = '#FFE800'
const blue = '#3B76F5'
const green = '#71E394'
const colors = [red, yellow, blue, green]

/**
 *  METHODS
 */
const drawRectangle = (cWidth, cHeight, color) => {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.rect(-cWidth / 2, -cHeight / 2, cWidth, cHeight)
    ctx.fill()
    ctx.closePath()
}

const deg2rad = (deg) => {
    return deg * 2 * Math.PI / 360
}

/**
 *  MAIN
 */

// Get canvas dimensions
console.log(canvas.getBoundingClientRect())
const canvasWidth = canvas.getBoundingClientRect().width
const canvasHeight = canvas.getBoundingClientRect().height
canvas.width = canvasWidth
canvas.height = canvasHeight

// Compute cells dimensions
const cellWidth = canvasWidth / COLS
const cellHeight = canvasHeight / ROWS

for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
        const x_ = i * cellWidth + cellWidth / 2
        const y_ = j * cellHeight + cellHeight / 2
        const colors_ = colors[(i+j) % colors.length]
        
        ctx.save()
        ctx.translate(x_, y_)
        if(Math.random() > 0.7) {
            ctx.rotate(deg2rad(45))
            ctx.scale(.5, .5)
        }
        drawRectangle(cellWidth, cellHeight, colors_)

        ctx.restore()
    }
}