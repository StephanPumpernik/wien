/* Vienna Sightseeing Beispiel */

// Stephansdom Objekt
let stephansdom = {
    lat: 48.208493,
    lng: 16.373118,
    zoom: 12,
    title: "Domkirche St. Stephan",
};

// Karte initialisieren
let map = L.map("map").setView([stephansdom.lat, stephansdom.lng], stephansdom.zoom);

//Overlay definieren
let overlays = {
    sights: L.featureGroup().addTo(map),
    lines: L.featureGroup().addTo(map),
    stops: L.featureGroup().addTo(map),
    zones: L.featureGroup().addTo(map),
}

//Layercontrol
L.control.layers({
    "BasemapAT grau": L.tileLayer.provider('BasemapAT.grau').addTo(map),
    "BasemapAT": L.tileLayer.provider('BasemapAT.basemap').addTo(map),
    "BasemapAT Overlay": L.tileLayer.provider('BasemapAT.overlay').addTo(map),
    "BasemapAT Ortho": L.tileLayer.provider('BasemapAT.orthofoto').addTo(map),
    "BasemapAT Terrain": L.tileLayer.provider('BasemapAT.terrain').addTo(map),
    "BasemapAT Surface": L.tileLayer.provider('BasemapAT.surface').addTo(map),
    "BasemapAT highdpiq": L.tileLayer.provider('BasemapAT.highdpi').addTo(map),

}, {
    "Sehenswürdigkeiten": overlays.sights,
    "Vienna sigthseeing Linien": overlays.lines,
    "Vienna sightseeing Haltestellen": overlays.stops,
    "Fußgängerzonen": overlays.zones,
}).addTo(map);

//maßstab machen
L.control.scale({
    imperial: false
}).addTo(map);

// Sehenswürdigkeiten Standorte Wien
async function loadSights(url) {
    //console.log(url);
    let response = await fetch(url)
    let jsondata = await response.json();
    //console.log(jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href= 'Stadt Wien' https://data.wien.gv.at> Stadt Wien <a/>"
    }).addTo(overlays.sights);
}

// Sehenswürdigkeiten Linien
async function loadLines(url) {
    //console.log(url);
    let response = await fetch(url)
    let jsondata = await response.json();
    //console.log(jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href= 'Stadt Wien' https://data.wien.gv.at> Stadt Wien <a/>"
    }).addTo(overlays.lines);
}


// Sehenswürdigkeiten stops
async function loadStops(url) {
    //console.log(url);
    let response = await fetch(url)
    let jsondata = await response.json();
    //console.log(jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href= 'Stadt Wien' https://data.wien.gv.at> Stadt Wien <a/>"
    }).addTo(overlays.stops);
}


//Fußgängerzonen 
async function loadZones(url) {
    //console.log(url);
    let response = await fetch(url)
    let jsondata = await response.json();
    //console.log(jsondata);
    L.geoJSON(jsondata, {
        attribution: "Datenquelle: <a href= 'Stadt Wien' https://data.wien.gv.at> Stadt Wien <a/>"
    }).addTo(overlays.zones);
}
loadSights("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SEHENSWUERDIGOGD&srsName=EPSG:4326&outputFormat=json");
loadLines("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TOURISTIKLINIEVSLOGD&srsName=EPSG:4326&outputFormat=json");
loadStops("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TOURISTIKHTSVSLOGD&srsName=EPSG:4326&outputFormat=json");
loadZones("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:FUSSGEHERZONEOGD&srsName=EPSG:4326&outputFormat=json");




