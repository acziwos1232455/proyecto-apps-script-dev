function doGet() {
  return HtmlService.createTemplateFromFile("frontend/index")
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag(
      "viewport",
      "width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"
    )
    .setTitle("Proyecto Apps Script Dev")
    .setFaviconUrl("https://image.flaticon.com/icons/png/512/953/953720.png");
}

// Función para incluir archivos HTML en la plantilla
function include(ruta) {
  return HtmlService.createHtmlOutputFromFile(ruta).getContent();
}
