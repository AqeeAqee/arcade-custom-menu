


function showMenu1(){
    blockMenu.showMenu([
        "whatever",
        "hello",
        "goodbye",
        "hello",
        "goodbye",
        "hello",
        "goodbye",
    ], MenuStyle.Grid, MenuLocation.FullScreen)
    blockMenu.setGridColumn(3)

    blockMenu.setIcons([
        sprites.builtin.forestTiles1,
        sprites.builtin.forestTiles2,
        null, //sprites.builtin.forestTiles3,
        null, //sprites.builtin.forestTiles4,
        sprites.builtin.forestTiles5,
        null, //sprites.builtin.forestTiles6,
        null, //sprites.builtin.forestTiles7,
    ])
}
function showMenu2() {
    blockMenu.showMenu([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
    ], MenuStyle.Grid, MenuLocation.FullScreen)
    blockMenu.setGridColumn(3)

    blockMenu.setIcons([
        sprites.projectile.star1,
        sprites.projectile.heart1,
        null, //sprites.builtin.forestTiles3,
        null, //sprites.builtin.forestTiles4,
        sprites.projectile.drop1,
        null, //sprites.builtin.forestTiles6,
        null, //sprites.builtin.forestTiles7,
    ])
}

let testValue=""
blockMenu.onMenuOptionSelected(function(option: string, index: number) {
    game.splash(option)
    blockMenu.closeMenu()

    if (!testValue){
        testValue=option
        showMenu2()
    }else
        testValue=""
    // console.log(option)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
    if(blockMenu.isMenuOpen())
        blockMenu.closeMenu()
    else
        showMenu1()
})
