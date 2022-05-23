radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        parar()
        control.waitMicros(4)
    } else if (receivedNumber == 1) {
        derecha()
        control.waitMicros(4)
    } else if (receivedNumber == 2) {
        avanza()
        control.waitMicros(4)
    } else if (receivedNumber == 3) {
        izquierda()
        control.waitMicros(4)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
function derecha () {
    angulo = 110
    neZha.setServoAngel(neZha.ServoTypeList._270, neZha.ServoList.S4, angulo)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function parar () {
    neZha.stopAllMotor()
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        . # # # .
        `)
}
function avanza () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    angulo = 80
    neZha.setMotorSpeed(neZha.MotorList.M1, -100)
    neZha.setMotorSpeed(neZha.MotorList.M2, -100)
}
function izquierda () {
    angulo = 40
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S4, angulo)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
}
let angulo = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(240)
