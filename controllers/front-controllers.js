//Importamos modelo de servicios y productos en forma variables
const Servicio = require('../models/modeloServicio.js');
const Producto = require('../models/modeloProducto.js');

/* funciones controladoras que reciben requerimeinto y respuesta para establecer la ruta de donde se va a visualizar la pagina*/
const getIndex = (req, res) => {
    res.render('index', {
        descripcion: 'Indice del la pagina'
    })
}

/* funciones controladoras que reciben requerimeinto y respuesta donde se va a visualizar en la pagina dentro de un try/catch tanto servicios */

/* SERVICIOS */
/* Leer todos los servicios */
const getServices = async (req, res) => {
    try {
        const servicios = await Servicio.find()
        //console.log(servicios)
        return res.status(200).json({
            ok: true,
            msg: 'leyendo todos los servidores',
            data: servicios
        })
    } catch (error) {
        return res.status(500).json({
            of: false,
            msg: 'Error al añadir un servicio, pongase ne contacto con el administrador'
        })
    }
}
/* Leer un servicio por su id */
const getServicesByid = async (req, res) => {
    try {
        const id = req.params.id
        const servicioEncontrado = await Servicio.findById(id);
    return res.status(200).json({
            ok: true,
            msg: 'Servicio por ID',
            servicioEncontrado
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener el servicio, por favor contacte al administrador'
        });
    }
}

/* Crear un servicio */
const createServicio = async (req, res) => {
    try {
        const body = req.body
        const servicio = new Servicio(body)
        const crearServicios = await servicio.save()

    return res.status(201).json({
            ok: true,
            msg: 'El servicio ha sido creado',
            crearServicios
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error al añadir un servicio, pongase en contacto con el administrador'
        })
    }
}
/* Editar un servicio por us id */
const updateServicioById = async (req, res) => {
    try {
        const servicio = await Servicio.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        console.log(servicio)
        if (!servicio) {
            return res.status(404).json({
                msg: "servicio no encontrado",

            })
        }
        res.status(200).json({
            ok: true,
            msg: "servicio actualizado por id",
            servicio
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al añadir un servicio, pongase ne contacto con el administrador'
        })
    }
}
/* Eliminar un servicio por su id */
const deleteServicioById = async (req, res) => {
    try {
        const id = req.params.id
        const servicioEliminado = await Servicio.findByIdAndDelete(id);
        if (!servicioEliminado) {
            return res.status(404).json({
                ok: false,
                msg: 'Servicio no encontrado'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Servicio eliminado correctamente',
            servicioEliminado
        });
    } catch (error) {
        return res.status(500).json({
            of: false,
            msg: 'Error al añadir un servicio, pongase ne contacto con el administrador'
        })
    }
}

/* funciones controladoras que reciben requerimeinto y respuesta donde se va a visualizar en la pagina dentro de un try/catch tanto productos */

/* PRODUCTOS */
/* Leer todos los productos */
const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find()
        //console.log(servicios)
        return res.status(200).json({
            ok: true,
            msg: 'leyendo todos los productos',
            data: productos
        })
    } catch (error) {
        return res.status(500).json({
            of: false,
            msg: 'Error al añadir un producto, pongase ne contacto con el administrador'
        })
    }
}
/* Leer un producto por su id */
const getProductosByid = async (req, res) => {
    try {
        const id = req.params.id
        const productoEncontrado = await Producto.findById(id);
    return res.status(200).json({
            ok: true,
            msg: 'Producto por ID',
            productoEncontrado
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al añadir un producto, pongase ne contacto con el administrador'
        });
    }
}
/* Crear un producto */
const createProducto = async (req, res) => {
    try {
        const body = req.body
        const producto = new Producto(body)
        const crearProductos = await producto.save()

    return res.status(201).json({
            ok: true,
            msg: 'El producto ha creado',
            crearProductos
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error al añadir un producto, pongase en contacto con el administrador'
        })
    }
}
/* Editar un producto por us id */
const updateProductoById = async (req, res) => {
    try {
        const producto = await Producto.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        console.log(producto)
        if (!producto) {
            return res.status(404).json({
                msg: "producto no encontrado",

            })
        }
        res.status(200).json({
            ok: true,
            msg: "producto actualizado por id",
            producto
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al añadir un producto, pongase ne contacto con el administrador'
        })
    }
}
/* Eliminar un producto por su id */
const deleteProductosById = async (req, res) => {
    try {
        const id = req.params.id
        const productoEliminado = await Producto.findByIdAndDelete(id);
        if (!productoEliminado) {
            return res.status(404).json({
                ok: false,
                msg: 'Producto no encontrado'
            });
        }
        res.status(200).json({
            ok: true,
            msg: 'Producto eliminado correctamente',
            productoEliminado
        });
    } catch (error) {
        return res.status(500).json({
            of: false,
            msg: 'Error al añadir un producto, pongase ne contacto con el administrador'
        })
    }
}

module.exports = {
    getIndex,
    getServices,
    getServicesByid,
    createServicio,
    updateServicioById,
    deleteServicioById,
    getProductos,
    getProductosByid,
    createProducto,
    updateProductoById,
    deleteProductosById,
}




