import 'dotenv/config';
import fetch from 'node-fetch';
import Character from '../Models/character.js';
import SpaceReplacement from '../Utils/spaceReplacement.js';

export default class CharacterController {
    async getAllCharacters() {
        try {
            const apiUrl = `${process.env.CLIENT_HOST}character`;
            const res = await fetch(apiUrl);
            const data = await res.json();
            return data.results.map(
                ({ id, name, status, gender }) => new Character(id, name, status, gender)
            );
        } catch (err) {
            console.error('Error al obtener los personajes', err);
            throw new Error('No se pudieron obtener los personajes');
        }
    }

    async getAliveCharacters(characters) {
        try {
            return characters.filter(char => char.status === 'Alive');
        } catch (err) {
            console.error('Error al filtrar personajes vivos', err);
            throw new Error('No se pudieron filtrar los personajes vivos');
        }
    }
}

export const getCharacters = async (req, res) => {
    try {
        const controller = new CharacterController();
        const all = await controller.getAllCharacters();
        const alive = await controller.getAliveCharacters(all);
        const modified = SpaceReplacement.modifyCharacterNames(alive);
        res.status(200).json(modified);
    } catch (error) {
        console.error('Ha ocurrido un error:', error.message);
        res.status(500).json({ error: error.message });
    }
};