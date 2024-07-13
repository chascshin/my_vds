// Центр карты на координатах [58, 58] с начальным зумом 5
var map = L.map('map').setView([58, 58], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Добавление WMS слоя
var wmsLayer = L.tileLayer.wms('http://91.226.80.216:8080/geoserver/qqqqq/wms?', {
    layers: 'qqqqq:PK',
    format: 'image/png',
    transparent: true,
    attribution: 'GeoServer WMS Layer'
}).addTo(map);

// Установка границ охвата слоя
var bbox = [
    [66.21562, 87.79727],
    [57.63274, 75.79395]
]; // Границы слоя из URL параметра bbox

map.fitBounds(bbox);

var marker = L.marker([58, 58]).addTo(map)
    .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

var popup = L.popup()
    .setLatLng([58, 58])
    .setContent('I am a standalone popup.')
    .openOn(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
