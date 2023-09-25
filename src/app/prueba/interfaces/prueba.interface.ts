
export interface Patron {
    codigo:    string;
    mensaje:   string;
    resultado: Resultado;
}
export interface Resultado {
    registrosInsertados:            number;
    registrosActualizados:          number;
    registrosNoProcesados:          number;
    totalRegistrosProcesados:       number;
    totalRegistrosLeidosDelArchivo: number;
    totalRegistrosSinCambios:       number;
    registrosConError:              any[];
}export interface Respuesta {
    codigo:    string;
    mensaje:   string;
    resultado: Resultado[];
}
export interface Resultado {
    id:             number;
    codModC7:       string;
    anexoC1:        string;
    codlocalC6:     string;
    cenEduC100:     string;
    nivModC2:       string;
    dNivModC50:     string;
    dFormaC20:      string;
    codCarC1:       string;
    dCodCarC25:     string;
    tipssexoC1:     string;
    dTipssexoC15:   string;
    gestionC1:      string;
    dGestionC50:    string;
    gesDepC2:       string;
    dGesDepC50:     string;
    directorC90:    string;
    telefonoC40:    string;
    emailC50:       string;
    pagwebC50:      string;
    dirCenC200:     string;
    referenciaC200: string;
    localidadC80:   string;
    codcpIneiC10:   string;
    codccppC6:      string;
    cenPobC100:     string;
    areaCensoC5:    string;
    dareacensoC12:  string;
    codgeoC6:       string;
    dDptoC15:       string;
    dProvC40:       string;
    dDistC60:       string;
    dRegionC50:     string;
    codooiiC6:      string;
    dDreugelC60:    string;
    nlatIeN126:     string;
    nlongIeN126:    string;
    tipoprogC2:     string;
    dTipoprogC50:   string;
    codTurC2:       string;
    dCodTurC30:     string;
    estadoC1:       string;
    dEstadoC12:     string;
    dFteDatoC20:    string;
    talumHomN60:    string;
    talumMujN60:    string;
    talumnoN70:     string;
    tdocenteN60:    string;
    tseccionN50:    string;
    fecharegC10:    string;
    fechaActC10:    string;
}
