function Left () {
    pins.analogWritePin(AnalogPin.P4, 1023)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.analogWritePin(AnalogPin.P10, 1023)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
}
function Forward () {
    pins.analogWritePin(AnalogPin.P4, 1023)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.analogWritePin(AnalogPin.P10, 1023)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
}
bluetooth.onBluetoothConnected(function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
function stop () {
    pins.analogWritePin(AnalogPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.analogWritePin(AnalogPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
bluetooth.onBluetoothDisconnected(function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
})
function Backword () {
    pins.analogWritePin(AnalogPin.P4, 1023)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P6, 1)
    pins.analogWritePin(AnalogPin.P10, 1023)
    pins.digitalWritePin(DigitalPin.P11, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    recvievestring = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (recvievestring == "up") {
        Forward()
    }
    if (recvievestring == "down") {
        Backword()
    }
    if (recvievestring == "right") {
        Right()
    }
    if (recvievestring == "left") {
        Left()
    }
    if (recvievestring.charAt(0) == "c") {
        servos.P0.setRange(0, 180)
    }
})
function Right () {
    pins.analogWritePin(AnalogPin.P4, 1023)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.analogWritePin(AnalogPin.P10, 1023)
    pins.digitalWritePin(DigitalPin.P11, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
let recvievestring = ""
led.enable(false)
bluetooth.startUartService()
servos.P0.setRange(0, 180)
stop()
