var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

module.exports.loop = function () {

    // var tower = Game.getObjectById('TOWER_ID');
    // if(tower) {
    //     var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
    //         filter: (structure) => structure.hits < structure.hitsMax
    //     });
    //     if(closestDamagedStructure) {
    //         tower.repair(closestDamagedStructure);
    //     }
    //
    //     var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //     if(closestHostile) {
    //         tower.attack(closestHostile);
    //     }
    // }

    //Get Creeps By Role
    var harvesters = roleHarvester.getHarvesters();
    var upgraders = roleUpgrader.getUpgraders();
    var builders = roleBuilder.getBuilders();

    //Creep role logic
    for (let i in harvesters){
      roleHarvester.run(harvesters[i]);
    }
    for (let i in upgraders){
      roleUpgrader.run(upgraders[i]);
    }
    for (let i in builders){
      roleBuilder.run(builders[i]);
    }

    //Creep spawning logic
    if (harvesters.length < 4){
      roleHarvester.spawnHarvester(Game.spawns.Spawn1);
    }
    else if (builders.length < 2){
      roleBuilder.spawnBuilder(Game.spawns.Spawn1);
    }
    else if (upgraders.length < 2){
      roleUpgrader.spawnUpgrader(Game.spawns.Spawn1)
    }


}
