const { Pokemon } = require('../db');


const deletePokemon = async (req, res) => {
    try {
        const {id} = req.params;
        await Pokemon.destroy({
            where: id
        })
        return res.status(200).send("El pokemon ha sido eliminado correctamente")
        
    } catch (error) {
        return res.status(400).send("Ha ocurrido un error eliminando el juego")
    }

}
module.exports = deletePokemon;