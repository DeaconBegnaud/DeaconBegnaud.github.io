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
                {"type": "enemy", "x": 700, "y": 70},
                {"type": "reward", "x": 1000, "y": 70},
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
        createSawBlade(750, groundY)
        createSawBlade(1500 , 350)
        createSawBlade(2000, groundY)
        createSawBlade(2100, 350)
        createSawBlade(2250, groundY)
        function createEnemy (x, y) {
            var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = groundY - y;
game.addGameItem(enemy)
enemy.velocityX = -2
enemy.velocityY = 0
enemy.onPlayerCollision = function () {
    game.changeIntegrity(-10)
};
enemy.onProjectileCollision = function () {
    game.increaseScore(200);
enemy.shrink();
}
        }
        createEnemy(700, 70)
        createEnemy (1300, 50)
        createEnemy(2000, 30)
        createEnemy(1200, 40)
        createEnemy(1700, 60)
        function createReward (x, y) {
            var reward = game.createGameItem("reward", 25);
var blueSquare = draw.rect(50, 50, "blue");
blueSquare.x = -25;
blueSquare.y = -25;
reward.addChild(blueSquare);
reward.x = x;
reward.y = groundY - y;
game.addGameItem(reward)
reward.velocityX = -2
reward.velocityY = 0
reward.onPlayerCollision = function () {
    game.changeIntegrity(10)
};
reward.onProjectileCollision = function () {
    game.increaseScore(3000);
reward.shrink();
}
        }
        createReward(1000, 70)
        createReward(2500, 50)
       createReward(1500, 70)
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
