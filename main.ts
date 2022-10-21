radio.onReceivedString(function (receivedString) {
    if ("f" == receivedString) {
        mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Run, 75, 64)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if ("b" == receivedString) {
        mbit_小車類.CarCtrlSpeed2(mbit_小車類.CarState.Car_Back, 75, 64)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if ("l" == receivedString) {
        mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_SpinLeft)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if ("r" == receivedString) {
        mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_SpinRight)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if ("s" == receivedString) {
        mbit_小車類.CarCtrl(mbit_小車類.CarState.Car_Stop)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
radio.setTransmitPower(7)
radio.setGroup(1)
basic.showLeds(`
    . # # . .
    . # . # .
    . # # # .
    . # # . .
    . # . # .
    `)
