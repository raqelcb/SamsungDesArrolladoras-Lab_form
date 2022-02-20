function mostrarValoracion() {
  var puntos = document.getElementById("valoracion").value;
  alert("Ha valorado con " + puntos + " puntos");
}

function mostrarCuenta() {
  var pais = document.getElementById("pais").value;
  var iban = document.getElementById("iban").value;
  var entidad = document.getElementById("entidad").value;
  var sucursal = document.getElementById("sucursal").value;
  var dc = document.getElementById("dc").value;
  var cuenta = document.getElementById("cuenta").value;

  alert(
    "Le informamos que su cuenta bancaria es: " +
      pais +
      "-" +
      iban +
      "-" +
      entidad +
      "-" +
      sucursal +
      "-" +
      dc +
      "-" +
      cuenta
  );
}

function mostrarDia() {
  var fecha = document.getElementById("fecha").value;
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  var numeroDia = new Date(fecha).getDay();
  var nombreDia = dias[numeroDia];
  alert("La fecha seleccionada en el elemento de fecha es: " + nombreDia);
}

document.getElementById("postcode").addEventListener("focusout", validarCodigo);

function validarCodigo() {
  var postcode = document.getElementById("postcode").value;

  if (postcode < 0 || postcode > 52999 || isNaN(postcode)) {
    alert("El código postal no es correcto");
  } else if ((postcode == "") | (postcode == " ")) {
    alert("Error! El campo código postal en blanco o con espacios");
  } else if (postcode.length < 5) {
    alert("El código postal debe tener 5 números");
  }
}

document
  .getElementById("provincia")
  .addEventListener("focusout", validarProvincia);

function validarProvinciaPostal() {
  const verde = document
    .createElement("p")
    .appendChild(
      document.createTextNode("El codigo postal corresponde a la provincia")
    );
  var postcode = document.getElementById("postcode").value;
  var provin = document.getElementById("provincia").value;
  var provincia = provin.toUpperCase();
  var provincias = [
    "ALAVA",
    "ALBACETE",
    "ALICANTE",
    "ALMERIA",
    "AVILA",
    "BADAJOZ",
    "ISLAS BALEARES",
    "BARCELONA",
    "BURGOS",
    "CACERES",
    "CADIZ",
    "CASTELLON",
    "CIUDAD REAL",
    "CORDOBA",
    "LA CORUNHA",
    "CUENCA",
    "GERONA",
    "GRANADA",
    "GUADALAJARA",
    "GUIPUZCOA",
    "HUELVA",
    "HUESCA",
    "JAEN",
    "LEON",
    "LERIDA",
    "LA RIOJA",
    "LUGO",
    "MADRID",
    "MALAGA",
    "MURCIA",
    "NAVARRA",
    "ORENSE",
    "ASTURIAS",
    "PALENCIA",
    "LAS PALMAS",
    "PONTEVEDRA",
    "SALAMANCA",
    "SANTA CRUZ DE TENERIFE",
    "CANTABRIA",
    "SEGOVIA",
    "SEVILLA",
    "SORIA",
    "TARRAGONA",
    "TERUEL",
    "TOLEDO",
    "VALENCIA",
    "VALLADOLID",
    "VIZCAYA",
    "ZAMORA",
    "ZARAGOZA",
    "CEUTA",
    "MELILLA",
  ];
  var codigosPostales = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
  ];

  if (
    postcode.substring(0, 2) == codigosPostales[0] &&
    provincia == provincias[0]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[1] &&
    provincia == provincias[1]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[2] &&
    provincia == provincias[2]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[3] &&
    provincia == provincias[3]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[4] &&
    provincia == provincias[4]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[5] &&
    provincia == provincias[5]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[6] &&
    provincia == provincias[6]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[7] &&
    provincia == provincias[7]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[8] &&
    provincia == provincias[8]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[9] &&
    provincia == provincias[9]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[10] &&
    provincia == provincias[10]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[11] &&
    provincia == provincias[11]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[12] &&
    provincia == provincias[12]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[13] &&
    provincia == provincias[13]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[14] &&
    provincia == provincias[14]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[15] &&
    provincia == provincias[15]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[16] &&
    provincia == provincias[16]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[17] &&
    provincia == provincias[17]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[18] &&
    provincia == provincias[18]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[19] &&
    provincia == provincias[19]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[20] &&
    provincia == provincias[20]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[21] &&
    provincia == provincias[21]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[22] &&
    provincia == provincias[22]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[23] &&
    provincia == provincias[23]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[24] &&
    provincia == provincias[24]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[25] &&
    provincia == provincias[25]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[26] &&
    provincia == provincias[26]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[27] &&
    provincia == provincias[27]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[28] &&
    provincia == provincias[28]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[29] &&
    provincia == provincias[29]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[30] &&
    provincia == provincias[30]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[31] &&
    provincia == provincias[31]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[32] &&
    provincia == provincias[32]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[33] &&
    provincia == provincias[33]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[34] &&
    provincia == provincias[34]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[35] &&
    provincia == provincias[35]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[36] &&
    provincia == provincias[36]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[37] &&
    provincia == provincias[37]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[38] &&
    provincia == provincias[38]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[39] &&
    provincia == provincias[39]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[40] &&
    provincia == provincias[40]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[41] &&
    provincia == provincias[41]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[42] &&
    provincia == provincias[42]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[43] &&
    provincia == provincias[43]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[44] &&
    provincia == provincias[44]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[45] &&
    provincia == provincias[45]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[46] &&
    provincia == provincias[46]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[47] &&
    provincia == provincias[47]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[48] &&
    provincia == provincias[48]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[49] &&
    provincia == provincias[49]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[50] &&
    provincia == provincias[50]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else if (
    postcode.substring(0, 2) == codigosPostales[51] &&
    provincia == provincias[51]
  ) {
    document.getElementById("validacion").appendChild(verde);
    document.getElementById("validacion").style.color = "green";
  } else {
    const rojo = document
      .createElement("p")
      .appendChild(
        document.createTextNode(
          "El codigo postal no corresponde a la provincia"
        )
      );
    document.getElementById("validacion").appendChild(rojo);
    document.getElementById("validacion").style.color = "red";
  }
}

document
  .getElementById("provincia")
  .addEventListener("change", validarProvincia);

function validarProvincia() {
  var provin = document.getElementById("provincia").value;
  var provincia = provin.toUpperCase();
  var provincias = [
    "ALAVA",
    "ALBACETE",
    "ALICANTE",
    "ALMERIA",
    "AVILA",
    "BADAJOZ",
    "ISLAS BALEARES",
    "BARCELONA",
    "BURGOS",
    "CACERES",
    "CADIZ",
    "CASTELLON",
    "CIUDAD REAL",
    "CORDOBA",
    "LA CORUNHA",
    "CUENCA",
    "GERONA",
    "GRANADA",
    "GUADALAJARA",
    "GUIPUZCOA",
    "HUELVA",
    "HUESCA",
    "JAEN",
    "LEON",
    "LERIDA",
    "LA RIOJA",
    "LUGO",
    "MADRID",
    "MALAGA",
    "MURCIA",
    "NAVARRA",
    "ORENSE",
    "ASTURIAS",
    "PALENCIA",
    "LAS PALMAS",
    "PONTEVEDRA",
    "SALAMANCA",
    "SANTA CRUZ DE TENERIFE",
    "CANTABRIA",
    "SEGOVIA",
    "SEVILLA",
    "SORIA",
    "TARRAGONA",
    "TERUEL",
    "TOLEDO",
    "VALENCIA",
    "VALLADOLID",
    "VIZCAYA",
    "ZAMORA",
    "ZARAGOZA",
    "CEUTA",
    "MELILLA",
  ];

  if (provincias.indexOf(provincia) < 0) {
    alert("La provincia no es válida");
    window.location.reload(true);
  }
}
