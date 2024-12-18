class SpaceReplacement {
    static replaceSpacesWithUnderscores(name) {
        return name.replace(/\s+/g, '_');
    }
    static modifyCharacterNames(characters) {
        return characters.map((character) => {
            return {
                ...character,
                name: this.replaceSpacesWithUnderscores(character.name)
            };
        });
    }
}

module.exports = SpaceReplacement;