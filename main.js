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

// Hintergrundkarte definieren
L.tileLayer('https://mapsneu.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png', {
    maxZoom: 19,
    attribution: 'Hintergrundkarte: <a href="https://www.basemap.at">basemap.at</a>'
}).addTo(map);

// Marker mit Popup beim Stephansdom
let marker = L.marker([stephansdom.lat, stephansdom.lng]).addTo(map);
marker.bindPopup(stephansdom.title).openPopup();

//maßstab machen
L.control.scale({
    imperial:false
}).addTo(map);

//GEOJson visualisieren Sehenswürdigkeiten

L.geoJSON({
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562060",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37366703,
                    48.21075446
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562060,
                "NAME": "Ankeruhr",
                "ADRESSE": "Hoher Markt 10/11",
                "WEITERE_INF": "http://www.wien.info/article.asp?IDArticle=2018",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/ankeruhr.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562061",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.40166122,
                    48.18296785
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562061,
                "NAME": "Friedhof St. Marx",
                "ADRESSE": "Leberstraße 6-8",
                "WEITERE_INF": "http://www.wien.gv.at/umwelt/parks/anlagen/friedhof-st-marx.html",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/stmarx.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562062",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.29125182,
                    48.21286565
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562062,
                "NAME": "Kuffner-Sternwarte",
                "ADRESSE": "Johann-Staud- Straße 10",
                "WEITERE_INF": "http://www.kuffner.ac.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/sternwarte.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562063",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37128536,
                    48.20095895
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562063,
                "NAME": "Künstlerhaus",
                "ADRESSE": "Karlsplatz 5",
                "WEITERE_INF": "http://www.k-haus.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/kuenstlerhaus.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562064",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.35848482,
                    48.20810859
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562064,
                "NAME": "Parlament",
                "ADRESSE": "Dr.-Karl-Renner-Ring 3",
                "WEITERE_INF": "http://www.parlament.gv.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/parlament.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562065",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.39500562,
                    48.2161227
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562065,
                "NAME": "Planetarium",
                "ADRESSE": "Oswald Thomas Platz 1",
                "WEITERE_INF": "http://www.planetarium-wien.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/planetarium.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562066",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.35729187,
                    48.21082368
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562066,
                "NAME": "Rathaus",
                "ADRESSE": "Friedrich-Schmidt- Platz 1",
                "WEITERE_INF": "http://www.wien.gv.at/buergerdienst/stadtinfo/rathausfuehrung",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/rathaus.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562067",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36682778,
                    48.20728576
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562067,
                "NAME": "Spanische Hofreitschule",
                "ADRESSE": "Michaelerplatz 1",
                "WEITERE_INF": "http://www.srs.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/hofreitschule.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562068",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37480127,
                    48.21161051
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562068,
                "NAME": "Synagoge",
                "ADRESSE": "Seitenstettengasse 2-4",
                "WEITERE_INF": "http://www.jmw.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/synagoge.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562069",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.3839302,
                    48.21154716
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562069,
                "NAME": "Urania Sternwarte",
                "ADRESSE": "Uraniastraße 1",
                "WEITERE_INF": "http://www.urania-sternwarte.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/uraniasternwarte.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562070",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36910593,
                    48.20325825
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562070,
                "NAME": "Wiener Staatsoper",
                "ADRESSE": "Opernring 2",
                "WEITERE_INF": "http://www.wiener-staatsoper.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/staatsoper.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562071",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.43871955,
                    48.15126365
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562071,
                "NAME": "Zentralfriedhof (Ehrengräber)",
                "ADRESSE": "Simmeringer Hauptstraße 234",
                "WEITERE_INF": "http://www.friedhoefewien.at/fhw/ep/channelView.do/channelId/-26709/pageTypeId/13572",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/zentralfriedhof.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562072",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36819228,
                    48.20457279
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562072,
                "NAME": "Albertina",
                "ADRESSE": "Albertinaplatz 1",
                "WEITERE_INF": "http://www.albertina.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/albertina.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562073",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37306751,
                    48.20384203
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562073,
                "NAME": "Haus der Musik",
                "ADRESSE": "Seilerstätte 30",
                "WEITERE_INF": "http://www.hdm.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/hausdermusik.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562074",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.35293709,
                    48.19756917
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562074,
                "NAME": "Haus des Meeres",
                "ADRESSE": "Fritz-Grünbaum-Platz 1",
                "WEITERE_INF": "http://www.haus-des-meeres.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/hausdesmeeres.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562075",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36940671,
                    48.2071211
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562075,
                "NAME": "Jüdisches Museum der Stadt Wien",
                "ADRESSE": "Dorotheergasse 11",
                "WEITERE_INF": "http://www.jmw.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/juedischesmuseum.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562076",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36985813,
                    48.20560878
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562076,
                "NAME": "Kaisergruft (Kapuzinergruft)",
                "ADRESSE": "Tegetthoffstraße 2",
                "WEITERE_INF": "http://www.kaisergruft.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/gruft.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562077",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.39350061,
                    48.21108295
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562077,
                "NAME": "KunstHausWien - Friedensreich Hundertwasser",
                "ADRESSE": "Untere Weißgerberstraße 13",
                "WEITERE_INF": "http://www.kunsthauswien.com",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/kunsthaus.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562078",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.3595744,
                    48.22260257
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562078,
                "NAME": "Palais Liechtenstein",
                "ADRESSE": "Fürstengasse 1",
                "WEITERE_INF": "http://www.liechtensteinmuseum.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/liechtensteinmuseum.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562079",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.38158365,
                    48.20757435
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562079,
                "NAME": "MAK - Österreichisches Museum für angewandte Kunst",
                "ADRESSE": "Stubenring 5",
                "WEITERE_INF": "http://www.mak.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/mak.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562080",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37490522,
                    48.2081588
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562080,
                "NAME": "Mozarthaus Vienna \"Figarohaus\"",
                "ADRESSE": "Domgasse 5",
                "WEITERE_INF": "http://www.mozarthausvienna.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/mozarthaus.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562081",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.35853896,
                    48.2032939
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562081,
                "NAME": "MuseumsQuartier Wien",
                "ADRESSE": "Museumsplatz 1(HOF E1/5)",
                "WEITERE_INF": "http://www.mqw.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/museumsquartier.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562082",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.380861,
                    48.19162889
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562082,
                "NAME": "Oberes Belvedere",
                "ADRESSE": "Prinz-Eugen-Straße 27",
                "WEITERE_INF": "http://www.belvedere.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/belvedere.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562083",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36538903,
                    48.20570883
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562083,
                "NAME": "Österreichische Nationalbibliothek",
                "ADRESSE": "Josefsplatz 1",
                "WEITERE_INF": "http://www.onb.ac.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/nationalbibliothek.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562084",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36776795,
                    48.20553391
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562084,
                "NAME": "Augustinerkirche",
                "ADRESSE": "Josefsplatz",
                "WEITERE_INF": "http://www.kaisergruft.at/augustiner/augustiner.htm",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/augustinerkirche.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562085",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.3613837,
                    48.21029891
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562085,
                "NAME": "Burgtheater",
                "ADRESSE": "Dr.-Karl-Lueger-Ring 2",
                "WEITERE_INF": "http://www.burgtheater.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/burgtheater.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562086",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.41002481,
                    48.24024578
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562086,
                "NAME": "Donauturm",
                "ADRESSE": "Donauturmstraße 4",
                "WEITERE_INF": "http://www.donauturm.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/donauturm.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562087",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.30872768,
                    48.17827583
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562087,
                "NAME": "Gloriette",
                "ADRESSE": "Gloriette",
                "WEITERE_INF": "http://www.schoenbrunn.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/gloriette.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562088",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36493544,
                    48.20655214
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562088,
                "NAME": "Hofburg",
                "ADRESSE": "Hofburg",
                "WEITERE_INF": "http://www.hofburg-wien.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/hofburg.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562089",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.39777706,
                    48.24513363
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562089,
                "NAME": "Islamisches Zentrum Wien / Moschee",
                "ADRESSE": "Am Bruckhafen 3",
                "WEITERE_INF": "http://www.islamiccentre.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/moschee.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562090",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37188468,
                    48.19826827
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562090,
                "NAME": "Karlskirche",
                "ADRESSE": "Karlsplatz",
                "WEITERE_INF": "https://www.wien.gv.at/wiki/index.php/Karlskirche",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/karlskirche.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562091",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37263594,
                    48.20051891
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562091,
                "NAME": "Musikverein",
                "ADRESSE": "Bösendorferstraße 12",
                "WEITERE_INF": "http://www.musikverein.at/",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/musikverein.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562092",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36577602,
                    48.20048786
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562092,
                "NAME": "Secession",
                "ADRESSE": "Friedrichstraße 12",
                "WEITERE_INF": "http://www.secession.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/secession.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562093",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36299031,
                    48.21868751
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562093,
                "NAME": "Sigmund Freud Museum",
                "ADRESSE": "Berggasse 19",
                "WEITERE_INF": "http://www.freud-museum.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/freudmuseum.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562094",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.31789685,
                    48.19091284
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562094,
                "NAME": "Technisches Museum",
                "ADRESSE": "Mariahilfer Straße 212",
                "WEITERE_INF": "http://www.tmw.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/tmw.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562095",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37295684,
                    48.19924625
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562095,
                "NAME": "Wien Museum Karlsplatz",
                "ADRESSE": "Karlsplatz 8",
                "WEITERE_INF": "http://www.wienmuseum.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/wienmuseum.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562096",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.38110197,
                    48.20997377
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562096,
                "NAME": "Wagner:Werk Museum Postsparkasse",
                "ADRESSE": "Georg-Coch-Platz 2",
                "WEITERE_INF": "http://www.ottowagner.com/oesterreichische-postsparkasse/",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/otto_wagner_postsparkasse.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562097",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.35962041,
                    48.20655934
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562097,
                "NAME": "Palais Epstein",
                "ADRESSE": "Dr.-Karl-Renner-Ring 1",
                "WEITERE_INF": "http://www.parlament.gv.at/GEBF/EPSTEIN/",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/palais_epstein.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562098",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36068315,
                    48.21302585
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562098,
                "NAME": "Universität Wien",
                "ADRESSE": "Universitätsring 1",
                "WEITERE_INF": "http://www.univie.ac.at/",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/universitaet_wien.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562099",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.3797891,
                    48.19696729
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562099,
                "NAME": "Unteres Belvedere",
                "ADRESSE": "Rennweg 6",
                "WEITERE_INF": "http://www.belvedere.at/",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/unteres_belvedere.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562100",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.25340469,
                    48.14763313
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562100,
                "NAME": "Wotrubakirche",
                "ADRESSE": "Rysergasse 2",
                "WEITERE_INF": "http://www.georgenberg.at/",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/wotrube_kirche.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562101",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.27877547,
                    48.21065498
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562101,
                "NAME": "Kirche am Steinhof",
                "ADRESSE": "Baumgartener Höhe 1",
                "WEITERE_INF": "http://www.wienkav.at/kav/ows/texte_anzeigen.asp?id=2268",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/steinhofkirche.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562102",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36737187,
                    48.20796379
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562102,
                "NAME": "Michaelerkirche",
                "ADRESSE": "Michaelerplatz",
                "WEITERE_INF": "http://www.michaelerkirche.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/michaelerplatz.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562103",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.3029293,
                    48.18426711
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562103,
                "NAME": "Palmenhaus",
                "ADRESSE": "Schönbrunner Schloßpark",
                "WEITERE_INF": "http://www.schoenbrunn.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/palmenhaus.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562104",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.39589946,
                    48.21663386
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562104,
                "NAME": "Riesenrad",
                "ADRESSE": "Prater",
                "WEITERE_INF": "http://www.wienerriesenrad.com",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/riesenrad.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562105",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.31273593,
                    48.18574414
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562105,
                "NAME": "Schloss Schönbrunn",
                "ADRESSE": "Schönbrunner Schloßstraße",
                "WEITERE_INF": "http://www.schoenbrunn.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/schoenbrunn.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562106",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.3664389,
                    48.20542292
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562106,
                "NAME": "Schmetterlinghaus",
                "ADRESSE": "Burggarten",
                "WEITERE_INF": "http://www.schmetterlinghaus.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/schmetterlinghaus.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562107",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.30896756,
                    48.18236276
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562107,
                "NAME": "Schönbrunn - Irrgarten",
                "ADRESSE": "Schönbrunner Schloßpark",
                "WEITERE_INF": "http://www.schoenbrunn.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/irrgarten.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562108",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37314036,
                    48.20845589
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562108,
                "NAME": "Stephansdom",
                "ADRESSE": "Stephansplatz",
                "WEITERE_INF": "http://www.stephanskirche.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/stephansdom.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562109",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.30417802,
                    48.18200558
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562109,
                "NAME": "Tiergarten Schönbrunn",
                "ADRESSE": "Schönbrunner Schloßpark",
                "WEITERE_INF": "http://www.zoovienna.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/tiergarten.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562110",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.41683821,
                    48.23479144
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562110,
                "NAME": "UNO-City",
                "ADRESSE": "Wagramer Straße 3-5",
                "WEITERE_INF": "http://www.unvienna.org",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/unocity.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562111",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36176885,
                    48.20371851
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562111,
                "NAME": "Kunsthistorisches Museum",
                "ADRESSE": "Maria-Theresien-Platz",
                "WEITERE_INF": "http://www.khm.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/khm.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562112",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.35902658,
                    48.2025766
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562112,
                "NAME": "Leopold Museum",
                "ADRESSE": "Museumsplatz 1",
                "WEITERE_INF": "http://www.leopoldmuseum.org",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/leopoldmuseum.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562625",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.35780138,
                    48.20375611
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562625,
                "NAME": "MUMOK Museum Moderner Kunst Stiftung Ludwig Wien",
                "ADRESSE": "Museumsplatz 1",
                "WEITERE_INF": "http://www.mumok.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/mumok.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562626",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.3597435,
                    48.20523457
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562626,
                "NAME": "Naturhistorisches Museum",
                "ADRESSE": "Maria-Theresien-Platz",
                "WEITERE_INF": "http://www.nhm-wien.ac.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/naturhistorisches.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562627",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36544438,
                    48.20683732
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562627,
                "NAME": "Schatzkammer",
                "ADRESSE": "Hofburg Schatzkammerstiege",
                "WEITERE_INF": "http://www.khm.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/schatzkammer.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562628",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.36562755,
                    48.20768405
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562628,
                "NAME": "Sisi Museum",
                "ADRESSE": "Hofburg Kaiserstiege",
                "WEITERE_INF": "http://www.hofburg-wien.at",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/sisimuseum.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562629",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.35927855,
                    48.21537126
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562629,
                "NAME": "Votivkirche",
                "ADRESSE": "Rooseveltplatz",
                "WEITERE_INF": "http://www.votivkirche.at/_museum.htm",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/votivkirche.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562630",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.24542627,
                    48.17111639
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562630,
                "NAME": "Hermesvilla Wien Museum",
                "ADRESSE": "Lainzer Tiergarten, Zugang: Hermesstraße",
                "WEITERE_INF": "http://www.wienmuseum.at/de/standorte/ansicht/hermesvilla.html",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/hermesvilla.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562631",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.37028626,
                    48.20026172
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562631,
                "NAME": "Otto Wagner Pavillon",
                "ADRESSE": "Karlsplatz",
                "WEITERE_INF": "http://www.wienmuseum.at/de/standorte/ansicht//standorte/otto-wagner-pavillon-karlsplatz.html",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/otto_wagner_pavillion.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562632",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.3059846,
                    48.18748618
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562632,
                "NAME": "Otto Wagner-Stadtpavillon Hietzing",
                "ADRESSE": "Schönbrunner Schloßstraße",
                "WEITERE_INF": "http://www.wienmuseum.at/de/standorte/ansicht//standorte/otto-wagner-hofpavillon-hietzing.html",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/otto_wagner_stadtpavillion_schoenbrunn.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562633",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.31085983,
                    48.18222279
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562633,
                "NAME": "Schlosspark Schönbrunn",
                "ADRESSE": "Maxingstraße, Eingang Hietzinger Tor",
                "WEITERE_INF": "http://www.lebensministerium.at/ministerium/bundesgaerten/gaerten_parks/Schoenbrunn.html",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/schlosspark_schoenbrunn.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        },
        {
            "type": "Feature",
            "id": "SEHENSWUERDIGOGD.562634",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    16.30981834,
                    48.18624433
                ]
            },
            "geometry_name": "SHAPE",
            "properties": {
                "OBJECTID": 562634,
                "NAME": "Wagenburg Schönbrunn",
                "ADRESSE": "Schönbrunner Schloßstraße",
                "WEITERE_INF": "http://www.kaiserliche-wagenburg.at/",
                "THUMBNAIL": "https://www.wien.gv.at/viennagis/bubble/wagenburg_schoenbrunn.jpg",
                "SE_ANNO_CAD_DATA": null
            }
        }
    ],
    "totalFeatures": 63,
    "numberMatched": 63,
    "numberReturned": 63,
    "timeStamp": "2025-04-03T14:21:38.280Z",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:EPSG::4326"
        }
    }
}).addTo(map);