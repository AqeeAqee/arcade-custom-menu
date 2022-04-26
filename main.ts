


blockMenu.showMenu([
    "whatever",
    "hello",
    "goodbye",
    "hello",
    "goodbye",
    "hello",
    "goodbye",
], MenuStyle.Grid, MenuLocation.BottomHalf)


blockMenu.onMenuOptionSelected(function(option: string, index: number) {
    game.splash(option)
    // console.log(option)
})