const Character = require('../Models/character');
const SpaceReplacement = require('../Utils/spaceReplacement');

class CharacterController {
    async getAllCharacters() {
        try {
            const { default: fetch } = await import('node-fetch');
            
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            const characters = data.results.map((char) => {
                return new Character(char.id, char.name, char.status, char.gender);
            });
            
            return characters;

        } catch (error) {
            console.error("Error al obtener los personajes");
            throw new Error("No se pudieron obtener los personajes");
        }
    }

    async getAliveCharacters(characters) {
        try {
            const aliveCharacters = characters.filter((char) => char.status === "Alive");
            return aliveCharacters;

        } catch (error) {
            console.error("Error al obtener los personajes");
            throw new Error("No se pudieron obtener los personajes");
        }
    }
}

const getCharacters = async (req, res) => {
    try {
        const characterController = new CharacterController();
        const allCharacters = await characterController.getAllCharacters();
        const aliveCharacters = await characterController.getAliveCharacters(allCharacters);
        const modifiedCharacters = SpaceReplacement.modifyCharacterNames(aliveCharacters);

        res.status(200).json(modifiedCharacters);
    } catch (error) {
        console.error("Ha ocurrido un error:", error.message);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    CharacterController,
    getCharacters
};
