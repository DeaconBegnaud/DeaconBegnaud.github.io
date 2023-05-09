var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade (x, y){
        var hitZoneSize = 25;
        var damageFromObstacle = 20;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25
obstacleImage.y = -25
        }
        createSawBlade(750, 475)
        createSawBlade(1500 , 350)
        createSawBlade(2000, 475)
        createSawBlade(2200, 350)
        function createEnemy (x, y){
            var hitZoneSize = 50
            var damageFromObstacle = 50;
            var enemyHitZone = game.createObstacle(hitZoneSize, damageFromObstacle)
            enemyHitZone.x = x
            enemyHitZone.y = y
            game.addGameItem(enemyHitZone)
            var enemyImage = draw.bitmap("img/\enemy robot.png")
            enemyHitZone.addChild(enemyImage)
        }
        createEnemy(1000, 500)
        //work on this
        
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
