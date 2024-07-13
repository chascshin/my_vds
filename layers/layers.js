var wms_layers = [];

var lyr_PK_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://91.226.80.216:8080/geoserver/qqqqq/wms?version%3D1.1.0%26layers%3Dqqqqq%3APK%26bbox%3D5763274.622533491%2C7579395.211265851%2C6621562.16770835%2C8779727.677827578%26width%3D549%26height%3D768%26srs%3DEPSG%3A3857%26styles%3D",
    attributions: ' ',
                              params: {
                                "LAYERS": "PK",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "PK",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PK_0, 0]);

lyr_PK_0.setVisible(true);
var layersList = [lyr_PK_0];
