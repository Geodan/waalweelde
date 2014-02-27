var matrixIds = new Array(26);
  for (var i=0; i<26; ++i) {
    matrixIds[i] = 'EPSG:28992'+':' + i;
} 
var wmts = new OpenLayers.Layer.WMTS({
    name: "BRTachtergrond",
    url: "http://geodata.nationaalgeoregister.nl/wmts/",
    layer: "brtachtergrondkaart",
    matrixSet: "EPSG:28992",
    matrixIds: matrixIds,
    format: "image/png8",
    style: ''
});
          
var ecotopen = new OpenLayers.Layer.WMS(
    "Ecotopen WMS/WFS",
    "/service/geoserver/research/ows",
    {layers: 'research:ecotopes_map_waalweelde', format: 'image/png', transparent: true}, 
    {isBaseLayer: false}
);