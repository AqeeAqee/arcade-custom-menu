


blockMenu.showMenu([
    "whatever",
    "hello",
    "goodbye",
    "hello",
    "goodbye",
    "hello",
    "goodbye",
], MenuStyle.Grid, MenuLocation.FullScreen)

blockMenu.setIcons([
    sprites.builtin.forestTiles1,
    sprites.builtin.forestTiles2,
    null, //sprites.builtin.forestTiles3,
    null, //sprites.builtin.forestTiles4,
    sprites.builtin.forestTiles5,
    null, //sprites.builtin.forestTiles6,
    null, //sprites.builtin.forestTiles7,
])
blockMenu.setGridColumn(3)

blockMenu.onMenuOptionSelected(function(option: string, index: number) {
    game.splash(option)
    // console.log(option)
})