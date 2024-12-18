const fetch = require('node-fetch');
const Character = require("./Character");

class CharacterController {
    async getAllCharacters() {
        try {
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

module.exports = CharacterController;