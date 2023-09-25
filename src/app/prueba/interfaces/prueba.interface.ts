export interface Patron{
    codigo: string,
    mensaje: string,
    resultado: {
        registrosInsertados: number,
        registrosActualizados: number,
        registrosNoProcesados: number,
        totalRegistrosProcesados: number,
        totalRegistrosLeidosDelArchivo: number,
        totalRegistrosSinCambios: number,
        registrosConError: string[]
    }
}
