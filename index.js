const CharacterController = require('./Controllers/characterController');
const SpaceReplacement = require('./Utils/spaceReplacement');

(async () => {
    try {
        const characterController = new CharacterController();
        const allCharacters = await characterController.getAllCharacters();
        const aliveCharacters = await characterController.getAliveCharacters(allCharacters);
        const modifiedCharacters = SpaceReplacement.modifyCharacterNames(aliveCharacters);
        
        console.log(modifiedCharacters);
    } catch (error) {
        console.error("Ha ocurrido un error:", error.message);
    }
})();
