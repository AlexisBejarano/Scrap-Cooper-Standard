


//Ingresar numero de falla A
var NumFalla1A = 0000;
var NumFalla2A = 0000;
var NumFalla3A = 0000;
var NumFalla4A = 0000;
var NumFalla5A = 0000;
var NumFalla6A = 0000;

//Ingresar la cantidad por NUmero de falla A
var CantTotalNumFalla1A = 0;
var CantTotalNumFalla2A = 0;
var CantTotalNumFalla3A = 0;
var CantTotalNumFalla4A = 0;
var CantTotalNumFalla5A = 0;
var CantTotalNumFalla6A = 0;
 	
//-----------------------------------------------------------

//Ingresar numero de falla B
var NumFalla1B = 0000;
var NumFalla2B = 0000;
var NumFalla3B = 0000;
var NumFalla4B = 0000;
var NumFalla5B = 0000;
var NumFalla6B = 0000;

//Ingresar la cantidad por NUmero de falla B
var CantTotalNumFalla1B = 0;
var CantTotalNumFalla2B = 0;
var CantTotalNumFalla3B = 0;
var CantTotalNumFalla4B = 0;
var CantTotalNumFalla5B = 0;
var CantTotalNumFalla6B = 0;

//-----------------------------------------------------------

//Ingresar numero de falla C
var NumFalla1C = 0000;
var NumFalla2C = 0000;
var NumFalla3C = 0000;
var NumFalla4C = 0000;
var NumFalla5C = 0000;
var NumFalla6C = 0000;

//Ingresar la cantidad por NUmero de falla C
var CantTotalNumFalla1C = 0;
var CantTotalNumFalla2C = 0;
var CantTotalNumFalla3C = 0;
var CantTotalNumFalla4C = 0;
var CantTotalNumFalla5C = 0;
var CantTotalNumFalla6C = 0;

//-----------------------------------------------------------

//Ingresar numero de falla D
var NumFalla1D = 0000;
var NumFalla2D = 0000;
var NumFalla3D = 0000;
var NumFalla4D = 0000;
var NumFalla5D = 0000;
var NumFalla6D = 0000;

//Ingresar la cantidad por NUmero de falla D
var CantTotalNumFalla1D = 0;
var CantTotalNumFalla2D = 0;
var CantTotalNumFalla3D = 0;
var CantTotalNumFalla4D = 0;
var CantTotalNumFalla5D = 0;
var CantTotalNumFalla6D = 0;

function obValor(id) {
	var el = document.getElementById(id).value;
	 // Ternario
	el = el==""? 0 : parseInt(el , 10);

	return el;
}

function capturar(){
	NumFalla1A = document.getElementById("Falla1A").value;
	CantTotalNumFalla1A = obValor("Cantidad1A");
	NumFalla2A = document.getElementById("Falla2A").value;
	CantTotalNumFalla2A = obValor("Cantidad2A");
	NumFalla3A = document.getElementById("Falla3A").value;
	CantTotalNumFalla3A = obValor("Cantidad3A");
	NumFalla4A = document.getElementById("Falla4A").value;
	CantTotalNumFalla4A = obValor("Cantidad4A");
	NumFalla5A = document.getElementById("Falla5A").value;
	CantTotalNumFalla5A = obValor("Cantidad5A");
	NumFalla6A = document.getElementById("Falla6A").value;
	CantTotalNumFalla6A = obValor("Cantidad6A");

	NumFalla1B = document.getElementById("Falla1B").value;
	CantTotalNumFalla1B = obValor("Cantidad1B");
	NumFalla2B = document.getElementById("Falla2B").value;
	CantTotalNumFalla2B = obValor("Cantidad2B");
	NumFalla3B = document.getElementById("Falla3B").value;
	CantTotalNumFalla3B = obValor("Cantidad3B");
	NumFalla4B = document.getElementById("Falla4B").value;
	CantTotalNumFalla4B = obValor("Cantidad4B");
	NumFalla5B = document.getElementById("Falla5B").value;
	CantTotalNumFalla5B = obValor("Cantidad5B");
	NumFalla6B = document.getElementById("Falla6B").value;
	CantTotalNumFalla6B = obValor("Cantidad6B");

	NumFalla1C = document.getElementById("Falla1C").value;
	CantTotalNumFalla1C = obValor("Cantidad1C");
	NumFalla2C = document.getElementById("Falla2C").value;
	CantTotalNumFalla2C = obValor("Cantidad2C");
	NumFalla3C = document.getElementById("Falla3C").value;
	CantTotalNumFalla3C = obValor("Cantidad3C");
	NumFalla4C = document.getElementById("Falla4C").value;
	CantTotalNumFalla4C = obValor("Cantidad4C");
	NumFalla5C = document.getElementById("Falla5C").value;
	CantTotalNumFalla5C = obValor("Cantidad5C");
	NumFalla6C = document.getElementById("Falla6C").value;
	CantTotalNumFalla6C = obValor("Cantidad6C");

	NumFalla1D = document.getElementById("Falla1D").value;
	CantTotalNumFalla1D = obValor("Cantidad1D");
	NumFalla2D = document.getElementById("Falla2D").value;
	CantTotalNumFalla2D = obValor("Cantidad2D");
	NumFalla3D = document.getElementById("Falla3D").value;
	CantTotalNumFalla3D = obValor("Cantidad3D");
	NumFalla4D = document.getElementById("Falla4D").value;
	CantTotalNumFalla4D = obValor("Cantidad4D");
	NumFalla5D = document.getElementById("Falla5D").value;
	CantTotalNumFalla5D = obValor("Cantidad5D");
	NumFalla6D = document.getElementById("Falla6D").value;
	CantTotalNumFalla6D = obValor("Cantidad6D");
 }


//-----------------------------------------------------------

	//Valor Fijo Estandar.
	var ValorS100D = 3;
	var ValorS100C = 2;

	var ValorS350A = 1;
	
	var ValorT17A = 1;
	var ValorT17C = 1;
	
	var ValorT18AB = 1;
	var ValorT18AC = 1;
	
	var ValorT19D = 2;
	var ValorT19A = 1;
	
	var ValorCTB = 1;
	var ValorCTC = 1;

	//Valores Fijos
	var ValorEnPies712A = 7.799;
	var ValorEnPies712B = 3.783;
	var ValorEnPies712C = 3.708;
	var ValorEnPies712D = 4.118;




function calcular(){
//Suma de datos ingresados (Numero de fallas A,B,C y D)
var Cantidad712A = parseInt(CantTotalNumFalla1A,10) + parseInt(CantTotalNumFalla2A,10) + parseInt(CantTotalNumFalla3A,10) + parseInt(CantTotalNumFalla4A,10) + parseInt(CantTotalNumFalla5A,10) + parseInt(CantTotalNumFalla6A,10);
var Cantidad712B = parseInt(CantTotalNumFalla1B,10) + parseInt(CantTotalNumFalla2B,10) + parseInt(CantTotalNumFalla3B,10) + parseInt(CantTotalNumFalla4B,10) + parseInt(CantTotalNumFalla5B,10) + parseInt(CantTotalNumFalla6B,10);
var Cantidad712C = parseInt(CantTotalNumFalla1C,10) + parseInt(CantTotalNumFalla2C,10) + parseInt(CantTotalNumFalla3C,10) + parseInt(CantTotalNumFalla4C,10) + parseInt(CantTotalNumFalla5C,10) + parseInt(CantTotalNumFalla6C,10);
var Cantidad712D = parseInt(CantTotalNumFalla1D,10) + parseInt(CantTotalNumFalla2D,10) + parseInt(CantTotalNumFalla3D,10) + parseInt(CantTotalNumFalla4D,10) + parseInt(CantTotalNumFalla5D,10) + parseInt(CantTotalNumFalla6D,10);



//Ecuaciones de Cantidad a Pies. (Aqvar var ui solo se multiplica la cantidad por el Valor Fijo y te da el resultado en pies.)
var CantidadEnPiesA = ValorEnPies712A * Cantidad712A;
var CantidadEnPiesB = ValorEnPies712B * Cantidad712B;
var CantidadEnPiesC = ValorEnPies712C * Cantidad712C;
var CantidadEnPiesD = ValorEnPies712D * Cantidad712D;

//Ecuaciones se multiplica Datos ingresados por Valor fijo estandar.
	var MultDPorCant1 = ValorS100D * Cantidad712D;
	var MultCPorCant1 = ValorS100C * Cantidad712C;
		var SumaResultadoCD = parseInt(MultDPorCant1,10) + parseInt(MultCPorCant1,10);

	var MultAPorCant2 = ValorS350A * Cantidad712A;
		var SumaResultadoA = MultAPorCant2;

	var MultAPorCant3 = ValorT17A * Cantidad712A;
	var MultCPorCant3 = ValorT17C * Cantidad712C;
		var SumaResultadoAC = parseInt(MultAPorCant3,10) + parseInt(MultCPorCant3,10);

	var MultBPorCant4 = ValorT18AB * Cantidad712B;
	var MultCPorCant4 = ValorT18AC * Cantidad712C;
		var SumaResultadoBC = parseInt(MultBPorCant4,10) + parseInt(MultCPorCant4,10);

	var MultDPorCant5 =  ValorT19D * Cantidad712D;
	var MultAPorCant5 =  Cantidad712A + Cantidad712B;
		var SumaResultadoDA = parseInt(MultDPorCant5,10) + parseInt(MultAPorCant5,10);

	var MultBPorCant6 = ValorT18AB * Cantidad712B;
	var MultCPorCant6 = ValorT18AC * Cantidad712C;
		var SumaResultadoBC6 = parseInt(MultBPorCant6,10) + parseInt(MultCPorCant6,10);

// Suma de piezas malas totales de 4 maquinas
var TotalDeRechazadas = parseInt(Cantidad712A,10) + parseInt(Cantidad712B,10) + parseInt(Cantidad712C,10) + parseInt(Cantidad712D,10);

// Suma de piezas malas por maquina
var MultSepCantFalla1A = CantTotalNumFalla1A * ValorEnPies712A;
var MultSepCantFalla2A = CantTotalNumFalla2A * ValorEnPies712A;
var MultSepCantFalla3A = CantTotalNumFalla3A * ValorEnPies712A;
var MultSepCantFalla4A = CantTotalNumFalla4A * ValorEnPies712A;
var MultSepCantFalla5A = CantTotalNumFalla5A * ValorEnPies712A;
var MultSepCantFalla6A = CantTotalNumFalla6A * ValorEnPies712A;

var MultSepCantFalla1B = CantTotalNumFalla1B * ValorEnPies712B;
var MultSepCantFalla2B = CantTotalNumFalla2B * ValorEnPies712B;
var MultSepCantFalla3B = CantTotalNumFalla3B * ValorEnPies712B;
var MultSepCantFalla4B = CantTotalNumFalla4B * ValorEnPies712B;
var MultSepCantFalla5B = CantTotalNumFalla5B * ValorEnPies712B;
var MultSepCantFalla6B = CantTotalNumFalla6B * ValorEnPies712B;

var MultSepCantFalla1C = CantTotalNumFalla1C * ValorEnPies712C;
var MultSepCantFalla2C = CantTotalNumFalla2C * ValorEnPies712C;
var MultSepCantFalla3C = CantTotalNumFalla3C * ValorEnPies712C;
var MultSepCantFalla4C = CantTotalNumFalla4C * ValorEnPies712C;
var MultSepCantFalla5C = CantTotalNumFalla5C * ValorEnPies712C;
var MultSepCantFalla6C = CantTotalNumFalla6C * ValorEnPies712C;

var MultSepCantFalla1D = CantTotalNumFalla1D * ValorEnPies712D;
var MultSepCantFalla2D = CantTotalNumFalla2D * ValorEnPies712D;
var MultSepCantFalla3D = CantTotalNumFalla3D * ValorEnPies712D;
var MultSepCantFalla4D = CantTotalNumFalla4D * ValorEnPies712D;
var MultSepCantFalla5D = CantTotalNumFalla5D * ValorEnPies712D;
var MultSepCantFalla6D = CantTotalNumFalla6D * ValorEnPies712D;

document.getElementById('Rechazadas').innerHTML = TotalDeRechazadas;


//Cantidad total por maquinas
document.getElementById('CantCantidad712A').innerHTML = Cantidad712A;
document.getElementById('CantCantidad712B').innerHTML = Cantidad712B;
document.getElementById('CantCantidad712C').innerHTML = Cantidad712C;
document.getElementById('CantCantidad712D').innerHTML = Cantidad712D;


//Maquina 712-A
if (CantTotalNumFalla1A >= 1) {
	document.getElementById('CantMultSepCantFalla1A').innerHTML = MultSepCantFalla1A;
	document.getElementById('CodNumFalla1A').innerHTML = NumFalla1A;
}

if (CantTotalNumFalla2A >= 1) {
	document.getElementById('CantMultSepCantFalla2A').innerHTML = MultSepCantFalla2A;
	document.getElementById('CodNumFalla2A').innerHTML = NumFalla2A;
}

if (CantTotalNumFalla3A >= 1) {
	document.getElementById('CantMultSepCantFalla3A').innerHTML = MultSepCantFalla3A;
	document.getElementById('CodNumFalla3A').innerHTML = NumFalla3A;
}
if (CantTotalNumFalla4A >= 1) {
	document.getElementById('CantMultSepCantFalla4A').innerHTML = MultSepCantFalla4A;
	document.getElementById('CodNumFalla4A').innerHTML = NumFalla4A;
}
if (CantTotalNumFalla5A >= 1) {
	document.getElementById('CantMultSepCantFalla5A').innerHTML = MultSepCantFalla5A;
	document.getElementById('CodNumFalla5A').innerHTML = NumFalla5A;
}
if (CantTotalNumFalla6A >= 1) {
	document.getElementById('CantMultSepCantFalla6A').innerHTML = MultSepCantFalla6A;
	document.getElementById('CodNumFalla6A').innerHTML = NumFalla6A;
}


//Maquina 712-B
if (CantTotalNumFalla1B >= 1) {
	document.getElementById('CantMultSepCantFalla1B').innerHTML = MultSepCantFalla1B;
	document.getElementById('CodNumFalla1B').innerHTML = NumFalla1B;
}

if (CantTotalNumFalla2B >= 1) {
	document.getElementById('CantMultSepCantFalla2B').innerHTML = MultSepCantFalla2B;
	document.getElementById('CodNumFalla2B').innerHTML = NumFalla2B;
}

if (CantTotalNumFalla3B >= 1) {
	document.getElementById('CantMultSepCantFalla3B').innerHTML = MultSepCantFalla3B;
	document.getElementById('CodNumFalla3B').innerHTML = NumFalla3B;
}
if (CantTotalNumFalla4B >= 1) {
	document.getElementById('CantMultSepCantFalla4B').innerHTML = MultSepCantFalla4B;
	document.getElementById('CodNumFalla4B').innerHTML = NumFalla4B;
}
if (CantTotalNumFalla5B >= 1) {
	document.getElementById('CantMultSepCantFalla5B').innerHTML = MultSepCantFalla5B;
	document.getElementById('CodNumFalla5B').innerHTML = NumFalla5B;
}
if (CantTotalNumFalla6B >= 1) {
	document.getElementById('CantMultSepCantFalla6B').innerHTML = MultSepCantFalla6B;
	document.getElementById('CodNumFalla6B').innerHTML = NumFalla6B;
}

//Maquina 712-C
if (CantTotalNumFalla1C >= 1) {
	document.getElementById('CantMultSepCantFalla1C').innerHTML = MultSepCantFalla1C;
	document.getElementById('CodNumFalla1C').innerHTML = NumFalla1C;
}

if (CantTotalNumFalla2C >= 1) {
	document.getElementById('CantMultSepCantFalla2C').innerHTML = MultSepCantFalla2C;
	document.getElementById('CodNumFalla2C').innerHTML = NumFalla2C;
}

if (CantTotalNumFalla3C >= 1) {
	document.getElementById('CantMultSepCantFalla3C').innerHTML = MultSepCantFalla3C;
	document.getElementById('CodNumFalla3C').innerHTML = NumFalla3C;
}
if (CantTotalNumFalla4C >= 1) {
	document.getElementById('CantMultSepCantFalla4C').innerHTML = MultSepCantFalla4C;
	document.getElementById('CodNumFalla4C').innerHTML = NumFalla4C;
}
if (CantTotalNumFalla5C >= 1) {
	document.getElementById('CantMultSepCantFalla5C').innerHTML = MultSepCantFalla5C;
	document.getElementById('CodNumFalla5C').innerHTML = NumFalla5C;
}
if (CantTotalNumFalla6C >= 1) {
	document.getElementById('CantMultSepCantFalla6C').innerHTML = MultSepCantFalla6C;
	document.getElementById('CodNumFalla6C').innerHTML = NumFalla6C;
}

//Maquina 712-D
if (CantTotalNumFalla1D >= 1) {
	document.getElementById('CantMultSepCantFalla1D').innerHTML = MultSepCantFalla1D;
	document.getElementById('CodNumFalla1D').innerHTML = NumFalla1D;
}

if (CantTotalNumFalla2D >= 1) {
	document.getElementById('CantMultSepCantFalla2D').innerHTML = MultSepCantFalla2D;
	document.getElementById('CodNumFalla2D').innerHTML = NumFalla2D;
}

if (CantTotalNumFalla3D >= 1) {
	document.getElementById('CantMultSepCantFalla3D').innerHTML = MultSepCantFalla3D;
	document.getElementById('CodNumFalla3D').innerHTML = NumFalla3D;
}
if (CantTotalNumFalla4D >= 1) {
	document.getElementById('CantMultSepCantFalla4D').innerHTML = MultSepCantFalla4D;
	document.getElementById('CodNumFalla4D').innerHTML = NumFalla4D;
}
if (CantTotalNumFalla5D >= 1) {
	document.getElementById('CantMultSepCantFalla5D').innerHTML = MultSepCantFalla5D;
	document.getElementById('CodNumFalla5D').innerHTML = NumFalla5D;
}
if (CantTotalNumFalla6D >= 1) {
	document.getElementById('CantMultSepCantFalla6D').innerHTML = MultSepCantFalla6D;
	document.getElementById('CodNumFalla6D').innerHTML = NumFalla6D;
}

	document.getElementById('T18A').innerHTML = SumaResultadoBC;
	document.getElementById('T17').innerHTML = SumaResultadoAC;
	document.getElementById('T19').innerHTML = SumaResultadoDA;
	document.getElementById('CT').innerHTML = SumaResultadoBC6;
	document.getElementById('S100').innerHTML = SumaResultadoCD;
	document.getElementById('S350').innerHTML = SumaResultadoA;


//DATOS HTML -------------------------------------------------------------
/*
document.write("<h2>Maquina 712-A</h2>");
if (CantTotalNumFalla1A >= 1) {
document.write("<br> 1.- Cod. " + NumFalla1A);
document.write("<br> 1.- Cant. " + CantTotalNumFalla1A);
document.write("<br> 1.- Pies. " + MultSepCantFalla1A);
document.write("<br>"); 
}

	if (CantTotalNumFalla2A >= 1) {
	
	document.write("<br> 2.- Cod. " + NumFalla2A);
	document.write("<br> 2.- Cant. " + CantTotalNumFalla2A);
	document.write("<br> 2.- Pies. " + MultSepCantFalla2A);
	document.write("<br>"); 
	}

		if (CantTotalNumFalla3A >= 1) {
		
		document.write("<br> 3.- Cod. " + NumFalla3A);
		document.write("<br> 3.- Cant. " + CantTotalNumFalla3A);
		document.write("<br> 3.- Pies. " + MultSepCantFalla3A);
		document.write("<br>"); 
		}

			if (CantTotalNumFalla4A >= 1) {
			
			document.write("<br> 4.- Cod. " + NumFalla4A);
			document.write("<br> 4.- Cant. " + CantTotalNumFalla4A);
			document.write("<br> 4.- Pies. " + MultSepCantFalla4A);
			document.write("<br>"); 
			}

				if (CantTotalNumFalla5A >= 1) {
				
				document.write("<br> 5.- Cod. " + NumFalla5A);
				document.write("<br> 5.- Cant. " + CantTotalNumFalla5A);
				document.write("<br> 5.- Pies. " + MultSepCantFalla5A);
				document.write("<br>"); 
				}

					if (CantTotalNumFalla6A >= 1) {
					
					document.write("<br> 6.- Cod. " + NumFalla6A);
					document.write("<br> 6.- Cant. " + CantTotalNumFalla6A);
					document.write("<br> 6.- Pies. " + MultSepCantFalla6A);
					document.write("<br>"); 
					}

document.write("<br> Suma total de pzs A: " + Cantidad712A);
document.write("<br> La cantidad total por : " + Cantidad712A + " en pies es de: " + CantidadEnPiesA);

document.write("<br> --------------------------------------------------"); 

document.write("<h2>Maquina 712-B</h2>");
if (CantTotalNumFalla1B >= 1) {
document.write("<br> 1.- Cod. " + NumFalla1B);
document.write("<br> 1.- Cant. " + CantTotalNumFalla1B);
document.write("<br> 1.- Pies. " + MultSepCantFalla1B);
document.write("<br>"); 
}

	if (CantTotalNumFalla2B >= 1) {
	
	document.write("<br> 2.- Cod. " + NumFalla2B);
	document.write("<br> 2.- Cant. " + CantTotalNumFalla2B);
	document.write("<br> 2.- Pies. " + MultSepCantFalla2B);
	document.write("<br>"); 
	}

		if (CantTotalNumFalla3B >= 1) {
		
		document.write("<br> 3.- Cod. " + NumFalla3B);
		document.write("<br> 3.- Cant. " + CantTotalNumFalla3B);
		document.write("<br> 3.- Pies. " + MultSepCantFalla3B);
		document.write("<br>"); 
		}

			if (CantTotalNumFalla4B >= 1) {
			
			document.write("<br> 4.- Cod. " + NumFalla4B);
			document.write("<br> 4.- Cant. " + CantTotalNumFalla4B);
			document.write("<br> 4.- Pies. " + MultSepCantFalla4B);
			document.write("<br>"); 
			}

				if (CantTotalNumFalla5B >= 1) {
				
				document.write("<br> 5.- Cod. " + NumFalla5B);
				document.write("<br> 5.- Cant. " + CantTotalNumFalla5B);
				document.write("<br> 5.- Pies. " + MultSepCantFalla5B);
				document.write("<br>"); 
				}

					if (CantTotalNumFalla6B >= 1) {
					
					document.write("<br> 6.- Cod. " + NumFalla6B);
					document.write("<br> 6.- Cant. " + CantTotalNumFalla6B);
					document.write("<br> 6.- Pies. " + MultSepCantFalla6B);
					document.write("<br>"); 
					}

document.write("<br> Suma total de pzs B: " , Cantidad712B);
document.write("<br> La cantidad total por: " + Cantidad712B + " en pies es de: " + CantidadEnPiesB);

document.write("<br> --------------------------------------------------"); 

document.write("<h2>Maquina 712-C</h2>");
if (CantTotalNumFalla1C >= 1) {
document.write("<br> 1.- Cod. " + NumFalla1C);
document.write("<br> 1.- Cant. " + CantTotalNumFalla1C);
document.write("<br> 1.- Pies. " + MultSepCantFalla1C);
document.write("<br>"); 
}

	if (CantTotalNumFalla2C >= 1) {
	
	document.write("<br> 2.- Cod. " + NumFalla2C);
	document.write("<br> 2.- Cant. " + CantTotalNumFalla2C);
	document.write("<br> 2.- Pies. " + MultSepCantFalla2C);
	document.write("<br>"); 
	}

		if (CantTotalNumFalla3C >= 1) {
		
		document.write("<br> 3.- Cod. " + NumFalla3C);
		document.write("<br> 3.- Cant. " + CantTotalNumFalla3C);
		document.write("<br> 3.- Pies. " + MultSepCantFalla3C);
		document.write("<br>"); 
		}

			if (CantTotalNumFalla4C >= 1) {
			
			document.write("<br> 4.- Cod. " + NumFalla4C);
			document.write("<br> 4.- Cant. " + CantTotalNumFalla4C);
			document.write("<br> 4.- Pies. " + MultSepCantFalla4C);
			document.write("<br>"); 
			}

				if (CantTotalNumFalla5C >= 1) {
				
				document.write("<br> 5.- Cod. " + NumFalla5C);
				document.write("<br> 5.- Cant. " + CantTotalNumFalla5C);
				document.write("<br> 5.- Pies. " + MultSepCantFalla5C);
				document.write("<br>"); 
				}

					if (CantTotalNumFalla6C >= 1) {
					
					document.write("<br> 6.- Cod. " + NumFalla6C);
					document.write("<br> 6.- Cant. " + CantTotalNumFalla6C);
					document.write("<br> 6.- Pies. " + MultSepCantFalla6C);
					document.write("<br>"); 
					}

document.write("<br> Suma total de pzs C: " , Cantidad712C);
document.write("<br> La cantidad total por: " + Cantidad712C + " en pies es de: " + CantidadEnPiesC);

document.write("<br> --------------------------------------------------"); 

document.write("<h2>Maquina 712-D</h2>"); 
if (CantTotalNumFalla1D >= 1) {
document.write("<br> 1.- Cod. " + NumFalla1D);
document.write("<br> 1.- Cant. " + CantTotalNumFalla1D);
document.write("<br> 1.- Pies. " + MultSepCantFalla1D);
document.write("<br>"); 
}

	if (CantTotalNumFalla2D >= 1) {
	
	document.write("<br> 2.- Cod. " + NumFalla2D);
	document.write("<br> 2.- Cant. " + CantTotalNumFalla2D);
	document.write("<br> 2.- Pies. " + MultSepCantFalla2D);
	document.write("<br>"); 
	}

		if (CantTotalNumFalla3D >= 1) {
		
		document.write("<br> 3.- Cod. " + NumFalla3D);
		document.write("<br> 3.- Cant. " + CantTotalNumFalla3D);
		document.write("<br> 3.- Pies. " + MultSepCantFalla3D);
		document.write("<br>"); 
		}

			if (CantTotalNumFalla4D >= 1) {
			
			document.write("<br> 4.- Cod. " + NumFalla4D);
			document.write("<br> 4.- Cant. " + CantTotalNumFalla4D);
			document.write("<br> 4.- Pies. " + MultSepCantFalla4D);
			document.write("<br>"); 
			}

				if (CantTotalNumFalla5D >= 1) {
				
				document.write("<br> 5.- Cod. " + NumFalla5D);
				document.write("<br> 5.- Cant. " + CantTotalNumFalla5D);
				document.write("<br> 5.- Pies. " + MultSepCantFalla5D);
				document.write("<br>"); 
				}

					if (CantTotalNumFalla6D >= 1) {
					
					document.write("<br> 6.- Cod. " + NumFalla6D);
					document.write("<br> 6.- Cant. " + CantTotalNumFalla6D);
					document.write("<br> 6.- Pies. " + MultSepCantFalla6D);
					document.write("<br>"); 
					}

document.write("<br> Suma total de pzs D: " , Cantidad712D);
document.write("<br> La cantidad total por: " + Cantidad712D + " en pies es de: " + CantidadEnPiesD);

document.write("<br>");
document.write("<br> ---------------------------------------------------");

document.write("<br> Total Rechazadas: " + TotalDeRechazadas);

document.write("<br>");

document.write("<br> ✔ S100: " + SumaResultadoCD);
document.write("<br> ✔ S350: " + SumaResultadoA);
document.write("<br> ✔ T17: " + SumaResultadoAC);
document.write("<br> ✔ T18A: " + SumaResultadoBC);
document.write("<br> ✔ T19: " + SumaResultadoDA);
document.write("<br> ✔ CT: " + SumaResultadoBC6);



*/
}