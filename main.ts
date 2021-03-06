controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(80, 60)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("x" + mySprite.x + "," + "y" + mySprite.y)
})
let mySprite: Sprite = null
scene.setBackgroundColor(0)
mySprite = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.say("I'm Cool")
mySprite.startEffect(effects.hearts)
forever(function () {
    mySprite.say("x" + mySprite.x + "," + "y" + mySprite.y)
})
