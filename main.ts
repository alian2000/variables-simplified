let x = 0
let y = 0
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x += 1
        basic.showNumber(x)
        if (x == 5) {
            y = x * 6
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
