var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alumnoSchema = new Schema({
    _id: Number,
    Apellido_Paterno:String,
    Apellido_Materno:String,
    Nombre_s:String,
    Genero:String,
    CURP:String,
    Carrera_Tecnica:String,
    Turno:String,
    Clave_lada:Number,
    Telefono_de_contacto_fijo_1:Number,
    Telefono_de_contacto_fijo_2:Number,
    Telefono_movil_celular:Number,
    Correo_Electronico_1:String,
    Correo_Electronico_2:String,
    EstatusEscolar:String,
    NumIncidencias:Number,
    qr:String,
    password:String,
    Grupo:String,
    Generacion:String,
});


module.exports = mongoose.model('usuarios', alumnoSchema);