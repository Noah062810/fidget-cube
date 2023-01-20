input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . # .
        . . # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("HI!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("WOAH!")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
})
basic.showIcon(IconNames.Heart)
