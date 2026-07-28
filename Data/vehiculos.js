const VEHICULOS = [

{
    id:"golf-mk2-8v",

    marca:"Volkswagen",
    modelo:"Golf GTI",
    generacion:"MK2",
    version:"GTI 8V",
    motor:"PB",

    potencia:112,
    combustible:"Gasolina",

    anio:1991,

    km:182000,

    cambio:"Manual 5 velocidades",

    color:"Rojo Tornado",

    pais:"España",

    propietarios:3,

    historial:true,

    itv:true,

    etiqueta:"C",

    precio:12000,

    precioMercado:15500,

    imagen:"assets/img/golf-mk2-8v.jpg",

    equipamiento:[
        "Dirección asistida",
        "Elevalunas eléctricos",
        "Cierre centralizado",
        "Asientos deportivos",
        "Llantas BBS",
        "Volante deportivo"
    ],

    averias:[
        "Caudalímetro",
        "Manguitos",
        "Silentblocks"
    ],

    mantenimiento:700
},

{
    id:"golf-mk2-16v",

    marca:"Volkswagen",
    modelo:"Golf GTI",
    generacion:"MK2",
    version:"GTI 16V",

    motor:"KR",

    potencia:139,

    combustible:"Gasolina",

    anio:1990,

    km:165000,

    cambio:"Manual 5 velocidades",

    color:"Negro",

    pais:"Alemania",

    propietarios:2,

    historial:true,

    itv:true,

    etiqueta:"C",

    precio:17800,

    precioMercado:19500,

    imagen:"assets/img/golf-mk2-16v.jpg",

    equipamiento:[
        "ABS",
        "Techo solar",
        "Ordenador de a bordo",
        "Asientos deportivos",
        "Llantas BBS"
    ],

    averias:[
        "KE-Jetronic",
        "Bomba gasolina"
    ],

    mantenimiento:850
},
    {
    id:"audi-rs3-8v",

    marca:"Audi",
    modelo:"RS3",
    generacion:"8V",
    version:"Sportback",

    motor:"2.5 TFSI",

    potencia:400,

    combustible:"Gasolina",

    anio:2018,

    km:68000,

    cambio:"S-Tronic",

    color:"Gris Nardo",

    pais:"Alemania",

    propietarios:1,

    historial:true,

    itv:true,

    etiqueta:"C",

    precio:48900,

    precioMercado:52000,

    imagen:"assets/img/rs3-8v.jpg",

    equipamiento:[
        "Virtual Cockpit",
        "Faros Matrix LED",
        "Asientos RS",
        "Quattro",
        "Navegador",
        "Cámara trasera"
    ],

    averias:[
        "Bomba de agua",
        "Termostato"
    ],

    mantenimiento:1200
},

{
    id:"focus-rs-mk2",

    marca:"Ford",
    modelo:"Focus RS",
    generacion:"MK2",
    version:"Standard",

    motor:"2.5 Turbo",

    potencia:305,

    combustible:"Gasolina",

    anio:2010,

    km:94000,

    cambio:"Manual 6 velocidades",

    color:"Azul Performance",

    pais:"Holanda",

    propietarios:2,

    historial:true,

    itv:true,

    etiqueta:"C",

    precio:35900,

    precioMercado:39000,

    imagen:"assets/img/focus-rs-mk2.jpg",

    equipamiento:[
        "Recaro",
        "Bluetooth",
        "Climatizador",
        "Llantas 19",
        "ESP",
        "Xenón"
    ],

    averias:[
        "Manguitos turbo",
        "Bomba dirección"
    ],

    mantenimiento:1100
},

{
    id:"bmw-m3-e46",

    marca:"BMW",
    modelo:"M3",

    generacion:"E46",

    version:"Coupé",

    motor:"S54",

    potencia:343,

    combustible:"Gasolina",

    anio:2004,

    km:128000,

    cambio:"Manual",

    color:"Carbon Black",

    pais:"Alemania",

    propietarios:2,

    historial:true,

    itv:true,

    etiqueta:"B",

    precio:43500,

    precioMercado:47000,

    imagen:"assets/img/m3-e46.jpg",

    equipamiento:[
        "Cuero",
        "Navegador",
        "Harman Kardon",
        "Xenón",
        "Asientos eléctricos"
    ],

    averias:[
        "Casquillos de biela",
        "VANOS"
    ],

    mantenimiento:1700
},

{
    id:"bmw-m3-e92",

    marca:"BMW",
    modelo:"M3",

    generacion:"E92",

    version:"Coupé",

    motor:"S65 V8",

    potencia:420,

    combustible:"Gasolina",

    anio:2009,

    km:103000,

    cambio:"DKG",

    color:"Blanco Alpine",

    pais:"Alemania",

    propietarios:2,

    historial:true,

    itv:true,

    etiqueta:"C",

    precio:47900,

    precioMercado:52000,

    imagen:"assets/img/m3-e92.jpg",

    equipamiento:[
        "DKG",
        "Cuero",
        "Navegador",
        "EDC",
        "Techo carbono"
    ],

    averias:[
        "Actuadores mariposa",
        "Casquillos"
    ],

    mantenimiento:2200
},
    {
    id:"mercedes-c63-w204",

    marca:"Mercedes-Benz",
    modelo:"C63 AMG",
    generacion:"W204",
    version:"AMG",

    motor:"6.2 V8",

    potencia:457,

    combustible:"Gasolina",

    anio:2012,

    km:112000,

    cambio:"AMG Speedshift",

    color:"Blanco",

    pais:"Alemania",

    propietarios:2,

    historial:true,

    itv:true,

    etiqueta:"C",

    precio:46900,

    precioMercado:51500,

    imagen:"assets/img/c63-w204.jpg",

    equipamiento:[
        "Cuero",
        "Navegador",
        "Asientos calefactados",
        "Faros bixenón",
        "Sensores de aparcamiento"
    ],

    averias:[
        "Polea",
        "Tacos motor"
    ],

    mantenimiento:2300
},

{
    id:"porsche-997",

    marca:"Porsche",
    modelo:"911 Carrera",

    generacion:"997",

    version:"Carrera S",

    motor:"3.8 Boxer",

    potencia:355,

    combustible:"Gasolina",

    anio:2008,

    km:98000,

    cambio:"Manual",

    color:"Gris",

    pais:"Alemania",

    propietarios:2,

    historial:true,

    itv:true,

    etiqueta:"C",

    precio:64900,

    precioMercado:70000,

    imagen:"assets/img/porsche997.jpg",

    equipamiento:[
        "PASM",
        "Cuero",
        "PCM",
        "Xenón",
        "Llantas Carrera"
    ],

    averias:[
        "IMS (primeras unidades)",
        "Bobinas"
    ],

    mantenimiento:2500
},

{
    id:"giulia-qv",

    marca:"Alfa Romeo",

    modelo:"Giulia",

    generacion:"952",

    version:"Quadrifoglio",

    motor:"2.9 V6 Biturbo",

    potencia:510,

    combustible:"Gasolina",

    anio:2019,

    km:52000,

    cambio:"Automático",

    color:"Rojo",

    pais:"Italia",

    propietarios:1,

    historial:true,

    itv:true,

    etiqueta:"C",

    precio:58900,

    precioMercado:63000,

    imagen:"assets/img/giulia-qv.jpg",

    equipamiento:[
        "Asientos carbono",
        "Navegador",
        "Harman Kardon",
        "Suspensión activa"
    ],

    averias:[
        "Batería",
        "Sensores"
    ],

    mantenimiento:1800
},

{
    id:"formentor-vz5",

    marca:"Cupra",

    modelo:"Formentor",

    generacion:"KM7",

    version:"VZ5",

    motor:"2.5 TSI",

    potencia:390,

    combustible:"Gasolina",

    anio:2023,

    km:18000,

    cambio:"DSG",

    color:"Gris Magnetic",

    pais:"España",

    propietarios:1,

    historial:true,

    itv:true,

    etiqueta:"C",

    precio:56900,

    precioMercado:61000,

    imagen:"assets/img/vz5.jpg",

    equipamiento:[
        "Bucket",
        "Cámara 360",
        "Travel Assist",
        "Matrix LED",
        "Navegador"
    ],

    averias:[
        "Sin incidencias relevantes"
    ],

    mantenimiento:950
}

];
