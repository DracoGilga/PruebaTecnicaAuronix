export default class SpaceReplacement {
    static replaceSpacesWithUnderscores(name) {
        return name.replace(/\s+/g, '_');
    }

    static modifyCharacterNames(characters) {
        return characters.map(character => ({
            ...character,
            name: this.replaceSpacesWithUnderscores(character.name)
        }));
    }
}