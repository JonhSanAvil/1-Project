const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,

   }
   
  
   let puntosRetencion;
 
   if (empleado.bruto < 12000) {
    puntosRetencion = 0;
   } else if (empleado.bruto >= 12000 && empleado.bruto < 24000) {
    puntosRetencion = 8;
   } else if (empleado.bruto >= 24000 && empleado.bruto < 34000) {
    puntosRetencion = 16;
   } else if (empleado.bruto >= 34000) {
    puntosRetencion = 30;
   }
  
/* Si el empleado tiene hijos, restarle a la Retencion 2 puntos. */
   if (empleado.hijos > 0 && empleado.bruto > 12000) {
    puntosRetencion = puntosRetencion - 2;
   }
   let retencion = empleado.bruto*(puntosRetencion/100)

/* sueldo neto en nómina = sueldo bruto - las retenciones */
   let sueldoNetoAnual = empleado.bruto - retencion;
   console.log("Sueldo neto anual: " + sueldoNetoAnual + '€');


   let costeDelTrabajador = (empleado.bruto * 0.2360) + (empleado.bruto * 0.055) + (empleado.bruto * 0.0020) +(empleado.bruto * 0.0070) 
    console.log(costeDelTrabajador + "€");


/* Coste de la Seguridad Social = (Sueldo bruto x 0,2360) + (Sueldo bruto x 0,055)
    + (Sueldo bruto x 0,0020) + (Sueldo bruto x 0,0070) */

 /*    Coste del trabajador = Sueldo bruto + Coste de la Seguridad Social */