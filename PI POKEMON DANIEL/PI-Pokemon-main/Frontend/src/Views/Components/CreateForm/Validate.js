export default function validate(formData){
    let error = {};

    // name
    if (!formData.name.length) {
      error.name = "Ingresa un nombre";
    } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
      error.name = "Hay un error en el nombre";
    }

    // hp
    const hp = parseInt(formData.hp);
    if (isNaN(hp) || hp < 1 || hp > 255) {
      error.hp = "Entre 1 y 255";
    }

    // attack
    const attack = parseInt(formData.attack);
    if (isNaN(attack) || attack < 1 || attack > 255) {
      error.attack = "Entre 1 y 255";
    }

    // defense
    const defense = parseInt(formData.defense);
    if (isNaN(defense) || defense < 1 || defense > 255) {
      error.defense = "Entre 1 y 255";
    }

    // speed
    const speed = parseInt(formData.speed);
    if (isNaN(speed) || speed < 1 || speed > 255) {
      error.speed = "Entre 1 y 255";
    }

    // weight
    const weight = parseInt(formData.weight);
    if (isNaN(weight) || weight < 1 || weight > 100) {
      error.weight = "Entre 1 y 100";
    }
    // height
    const height = parseInt(formData.height);
    if (isNaN(height) || height < 1 || height > 100) {
      error.height = "Entre 1 y 100";
    }

    // image
    const urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    if (!urlRegex.test(formData.img)) {
      error.img = "Invalid URL";
    }

    // types
    if (!formData.types.length) {
        error.types = "Selecciona un tipo";
    } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
      error.types = "Hay un error en el nombres";
    }

    return error;
};