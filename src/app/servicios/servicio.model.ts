export class Servicio {
    idServicio: String;
    idFichaClinica!:{
      idFichaClinica: String,
      fechaHora : String,
      idCliente : {
        idCliente : String,
        nombre : String,
        apellido : String,
      },
      idTipoProducto : {
        idCategoria : {
          idCategoria : String,
          descripcion : String,
        },
      },
      observacion: String
    };
    idEmpleado!:{
      idPersona : String,
      apellido : String,
      nombre : String,
    };
  
  
    presupuesto!: number;
    fechaHora= {FechaHora : String};
    observacion! : String;
    fechaHoraCadena! : String;
}

export interface getServicio{
    lista: Servicio[];
    totalDatos: number
}