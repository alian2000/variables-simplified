let x = 0
let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x += 1
        basic.showNumber(x)
        if (x == 5) {
            y = x * 5
            basic.pause(5000)
            basic.showIcon(IconNames.Snake)
            basic.showNumber(y)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        x += -1
        basic.showNumber(x)
        if (x == -5) {
            basic.showString("No i am freezing")
        }
    }
})
