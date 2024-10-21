/**validationResult es una varaible declarada que nos da el requerimiento para validar los metodos desde front-router.
 * validaInputs es la cosntante que invoca req, res y next para detallar que tiene que pasar si sale error mediante una condicion
 */
const { validationResult } = require('express-validator')

const validaInputs = (req, res, next) => {

    const errores = validationResult(req)

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        })
    }

    next()

}
module.exports = {
    validaInputs
}