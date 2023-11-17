const nombres = [
    "<a href='https://www.youtube.com/@danypcastrejon/featured' target='_blank'>danypcastrejon</a>",
    "<a href='https://www.youtube.com/@laduchafriaoficial' target='_blank'>laduchafriaoficial</a>",
    "<a href='https://www.youtube.com/@AdriaSolaPastor/featured' target='_blank'>AdriaSolaPastor</a>",
    "<a href='https://www.youtube.com/@bulkin_uri' target='_blank'>bulkin_uri</a>",
    "<a href='https://www.youtube.com/@miguel11mom' target='_blank'>miguel11mom</a>",
    "<a href='https://www.youtube.com/@MarianoTrejo' target='_blank'>MarianoTrejo</a>",
    "<a href='https://www.youtube.com/@chiefalekai' target='_blank'>chiefalekai</a>",
    "<a href='https://www.youtube.com/@caminoestoico' target='_blank'>caminoestoico</a>",
    "<a href='https://www.youtube.com/@ATHLEANXEspanol/videos' target='_blank'>ATHLEANXEspanol</a>",
    "<a href='https://www.youtube.com/@DRLAROSA/featured' target='_blank'>DRLAROSA</a>",
    "<a href='https://www.youtube.com/@MiMejorYo/featured' target='_blank'>MiMejorYo</a>",
    "<a href='https://www.youtube.com/@LaPildoraMagica' target='_blank'>LaPildoraMagica</a>",
    "<a href='https://www.youtube.com/@ActitudTriunfante/featured' target='_blank'>ActitudTriunfante</a>",
    "<a href='https://www.youtube.com/@motivationhubespanol/featured' target='_blank'>motivationhubespanol</a>",
    "<a href='https://www.youtube.com/@RisingWave/featured' target='_blank'>RisingWave</a>",
    "<a href='https://www.youtube.com/@AubiblioNarraciones/featured' target='_blank'>AubiblioNarraciones</a>",
    "<a href='https://www.youtube.com/@curiosamente/featured' target='_blank'>curiosamente</a>",
    "<a href='https://www.youtube.com/@HistoriaIncomprendida/featured' target='_blank'>HistoriaIncomprendida</a>",
    "<a href='https://www.youtube.com/@ElBandicoot/featured' target='_blank'>ElBandicoot</a>",
    "<a href='https://www.youtube.com/@ChamoGutierrez' target='_blank'>ChamoGutierrez</a>",
    "<a href='https://www.youtube.com/@psicologia.practica/featured' target='_blank'>psicologia.practica</a>",
    "<a href='https://www.youtube.com/@motiversityespanol' target='_blank'>motiversityespanol</a>",
    "<a href='https://www.youtube.com/@EsquizofreniaNatural' target='_blank'>EsquizofreniaNatural</a>",
    "<a href='https://www.youtube.com/@Tu_Mejor_Version' target='_blank'>Tu_Mejor_Version</a>",
    "<a href='https://www.youtube.com/@jorgejofre/featured' target='_blank'>jorgejofre</a>",
    "<a href='https://www.youtube.com/@DieguitoMoreno' target='_blank'>DieguitoMoreno</a>",
    "<a href='https://www.youtube.com/@Sapienciapractica' target='_blank'>Sapienciapractica</a>",
    "<a href='https://www.youtube.com/@Hevola/featured' target='_blank'>Hevola</a>",
    "<a href='https://www.youtube.com/@SamuelGavilan/featured' target='_blank'>SamuelGavilan</a>",
    "<a href='https://www.youtube.com/@SabioX/featured' target='_blank'>SabioX</a>",
    "<a href='https://www.youtube.com/@laconsultadespidey/featured' target='_blank'>laconsultadespidey</a>",
    "<a href='https://www.youtube.com/@ELTEMACH/featured' target='_blank'>ELTEMACH</a>",
    "<a href='https://www.youtube.com/@CaminosdeExito/featured' target='_blank'>CaminosdeExito</a>",
    "<a href='https://www.youtube.com/@IrisRoig' target='_blank'>IrisRoig</a>",
    "<a href='https://www.youtube.com/@lirykal/featured' target='_blank'>lirykal</a>",
    "<a href='https://www.youtube.com/@CosmoMillonario' target='_blank'>CosmoMillonario</a>"
  ];
  
  const botonNombre = document.getElementById("nombreBtn");
  const displayNombre = document.getElementById("nombreDisplay");
  
  botonNombre.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    displayNombre.innerHTML = nombres[indiceAleatorio];
  
    const windowHeight = window.innerHeight;
    const elementHeight = displayNombre.clientHeight;
    const middleOffset = (windowHeight - elementHeight) / 2;
  
    displayNombre.scrollIntoView({ behavior: "smooth", block: "start" });
    window.scrollBy(0, -middleOffset);
  });
  