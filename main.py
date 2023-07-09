x = 0
y = 0

def on_forever():
    global x, y
    if input.button_is_pressed(Button.A):
        x += 1
        basic.show_number(x)
        if x == 5:
            music.play(music.create_sound_expression(WaveShape.SINE,
                    5000,
                    0,
                    255,
                    0,
                    5000,
                    SoundExpressionEffect.NONE,
                    InterpolationCurve.LINEAR),
                music.PlaybackMode.UNTIL_DONE)
            y = 2 * 5
            basic.show_icon(IconNames.SNAKE)
            basic.pause(5000)
    if input.button_is_pressed(Button.B):
        x += -1
        basic.show_number(x)
        if x == -5:
            music.play(music.string_playable("E D G F B A C5 B ", 500),
                music.PlaybackMode.UNTIL_DONE)
            basic.show_string("No i am freezing")
basic.forever(on_forever)

