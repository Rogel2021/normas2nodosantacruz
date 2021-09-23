ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32720").setExtent([-53197.507664, 7692043.596564, 1410227.644031, 8531390.006106]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Bingmaps_1 = new ol.layer.Tile({
            'title': 'Bing maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AREA_NO_CONCILIADA_FINAL_20S_3 = new ol.format.GeoJSON();
var features_AREA_NO_CONCILIADA_FINAL_20S_3 = format_AREA_NO_CONCILIADA_FINAL_20S_3.readFeatures(json_AREA_NO_CONCILIADA_FINAL_20S_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_AREA_NO_CONCILIADA_FINAL_20S_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_NO_CONCILIADA_FINAL_20S_3.addFeatures(features_AREA_NO_CONCILIADA_FINAL_20S_3);
var lyr_AREA_NO_CONCILIADA_FINAL_20S_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA_NO_CONCILIADA_FINAL_20S_3, 
                style: style_AREA_NO_CONCILIADA_FINAL_20S_3,
                interactive: true,
                title: '<img src="styles/legend/AREA_NO_CONCILIADA_FINAL_20S_3.png" /> AREA_NO_CONCILIADA_FINAL_20S'
            });
var format_VERTICES_NO_CONCILIADOS_FINAL_20S_4 = new ol.format.GeoJSON();
var features_VERTICES_NO_CONCILIADOS_FINAL_20S_4 = format_VERTICES_NO_CONCILIADOS_FINAL_20S_4.readFeatures(json_VERTICES_NO_CONCILIADOS_FINAL_20S_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_VERTICES_NO_CONCILIADOS_FINAL_20S_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERTICES_NO_CONCILIADOS_FINAL_20S_4.addFeatures(features_VERTICES_NO_CONCILIADOS_FINAL_20S_4);
var lyr_VERTICES_NO_CONCILIADOS_FINAL_20S_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VERTICES_NO_CONCILIADOS_FINAL_20S_4, 
                style: style_VERTICES_NO_CONCILIADOS_FINAL_20S_4,
                interactive: true,
                title: '<img src="styles/legend/VERTICES_NO_CONCILIADOS_FINAL_20S_4.png" /> VERTICES_NO_CONCILIADOS_FINAL_20S'
            });
var format_VERTICES_CONCILIADOS_FINAL_20S_5 = new ol.format.GeoJSON();
var features_VERTICES_CONCILIADOS_FINAL_20S_5 = format_VERTICES_CONCILIADOS_FINAL_20S_5.readFeatures(json_VERTICES_CONCILIADOS_FINAL_20S_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_VERTICES_CONCILIADOS_FINAL_20S_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERTICES_CONCILIADOS_FINAL_20S_5.addFeatures(features_VERTICES_CONCILIADOS_FINAL_20S_5);
var lyr_VERTICES_CONCILIADOS_FINAL_20S_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VERTICES_CONCILIADOS_FINAL_20S_5, 
                style: style_VERTICES_CONCILIADOS_FINAL_20S_5,
                interactive: true,
                title: '<img src="styles/legend/VERTICES_CONCILIADOS_FINAL_20S_5.png" /> VERTICES_CONCILIADOS_FINAL_20S'
            });
var format_LIMITE_NO_CONCILIADO_FINAL_20S_6 = new ol.format.GeoJSON();
var features_LIMITE_NO_CONCILIADO_FINAL_20S_6 = format_LIMITE_NO_CONCILIADO_FINAL_20S_6.readFeatures(json_LIMITE_NO_CONCILIADO_FINAL_20S_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LIMITE_NO_CONCILIADO_FINAL_20S_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_NO_CONCILIADO_FINAL_20S_6.addFeatures(features_LIMITE_NO_CONCILIADO_FINAL_20S_6);
var lyr_LIMITE_NO_CONCILIADO_FINAL_20S_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITE_NO_CONCILIADO_FINAL_20S_6, 
                style: style_LIMITE_NO_CONCILIADO_FINAL_20S_6,
                interactive: true,
                title: '<img src="styles/legend/LIMITE_NO_CONCILIADO_FINAL_20S_6.png" /> LIMITE_NO_CONCILIADO_FINAL_20S'
            });
var format_LIMITE_CONCILIADO_FINAL_20S_7 = new ol.format.GeoJSON();
var features_LIMITE_CONCILIADO_FINAL_20S_7 = format_LIMITE_CONCILIADO_FINAL_20S_7.readFeatures(json_LIMITE_CONCILIADO_FINAL_20S_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_LIMITE_CONCILIADO_FINAL_20S_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITE_CONCILIADO_FINAL_20S_7.addFeatures(features_LIMITE_CONCILIADO_FINAL_20S_7);
var lyr_LIMITE_CONCILIADO_FINAL_20S_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITE_CONCILIADO_FINAL_20S_7, 
                style: style_LIMITE_CONCILIADO_FINAL_20S_7,
                interactive: true,
                title: '<img src="styles/legend/LIMITE_CONCILIADO_FINAL_20S_7.png" /> LIMITE_CONCILIADO_FINAL_20S'
            });
var format_COMUNIDADES_FINAL_20S_8 = new ol.format.GeoJSON();
var features_COMUNIDADES_FINAL_20S_8 = format_COMUNIDADES_FINAL_20S_8.readFeatures(json_COMUNIDADES_FINAL_20S_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_COMUNIDADES_FINAL_20S_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNIDADES_FINAL_20S_8.addFeatures(features_COMUNIDADES_FINAL_20S_8);
var lyr_COMUNIDADES_FINAL_20S_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMUNIDADES_FINAL_20S_8, 
                style: style_COMUNIDADES_FINAL_20S_8,
                interactive: true,
                title: '<img src="styles/legend/COMUNIDADES_FINAL_20S_8.png" /> COMUNIDADES_FINAL_20S'
            });
var format_Vertices_No_Conciliados_Campo_9 = new ol.format.GeoJSON();
var features_Vertices_No_Conciliados_Campo_9 = format_Vertices_No_Conciliados_Campo_9.readFeatures(json_Vertices_No_Conciliados_Campo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Vertices_No_Conciliados_Campo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vertices_No_Conciliados_Campo_9.addFeatures(features_Vertices_No_Conciliados_Campo_9);
var lyr_Vertices_No_Conciliados_Campo_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vertices_No_Conciliados_Campo_9, 
                style: style_Vertices_No_Conciliados_Campo_9,
                interactive: true,
                title: '<img src="styles/legend/Vertices_No_Conciliados_Campo_9.png" /> Vertices_No_Conciliados_Campo'
            });
var format_Vertices_Conciliados_Campo_10 = new ol.format.GeoJSON();
var features_Vertices_Conciliados_Campo_10 = format_Vertices_Conciliados_Campo_10.readFeatures(json_Vertices_Conciliados_Campo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Vertices_Conciliados_Campo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vertices_Conciliados_Campo_10.addFeatures(features_Vertices_Conciliados_Campo_10);
var lyr_Vertices_Conciliados_Campo_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vertices_Conciliados_Campo_10, 
                style: style_Vertices_Conciliados_Campo_10,
                interactive: true,
                title: '<img src="styles/legend/Vertices_Conciliados_Campo_10.png" /> Vertices_Conciliados_Campo'
            });
var format_Limite_No_Conciliado_Campo_11 = new ol.format.GeoJSON();
var features_Limite_No_Conciliado_Campo_11 = format_Limite_No_Conciliado_Campo_11.readFeatures(json_Limite_No_Conciliado_Campo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Limite_No_Conciliado_Campo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_No_Conciliado_Campo_11.addFeatures(features_Limite_No_Conciliado_Campo_11);
var lyr_Limite_No_Conciliado_Campo_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_No_Conciliado_Campo_11, 
                style: style_Limite_No_Conciliado_Campo_11,
                interactive: true,
                title: '<img src="styles/legend/Limite_No_Conciliado_Campo_11.png" /> Limite_No_Conciliado_Campo'
            });
var format_Limite_Conciliado_Campo_12 = new ol.format.GeoJSON();
var features_Limite_Conciliado_Campo_12 = format_Limite_Conciliado_Campo_12.readFeatures(json_Limite_Conciliado_Campo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Limite_Conciliado_Campo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Conciliado_Campo_12.addFeatures(features_Limite_Conciliado_Campo_12);
var lyr_Limite_Conciliado_Campo_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Conciliado_Campo_12, 
                style: style_Limite_Conciliado_Campo_12,
                interactive: true,
                title: '<img src="styles/legend/Limite_Conciliado_Campo_12.png" /> Limite_Conciliado_Campo'
            });
var format_Comunidades_Campo_13 = new ol.format.GeoJSON();
var features_Comunidades_Campo_13 = format_Comunidades_Campo_13.readFeatures(json_Comunidades_Campo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Comunidades_Campo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_Campo_13.addFeatures(features_Comunidades_Campo_13);
var lyr_Comunidades_Campo_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunidades_Campo_13, 
                style: style_Comunidades_Campo_13,
                interactive: true,
                title: '<img src="styles/legend/Comunidades_Campo_13.png" /> Comunidades_Campo'
            });
var format_Area_Sobreposicion_14 = new ol.format.GeoJSON();
var features_Area_Sobreposicion_14 = format_Area_Sobreposicion_14.readFeatures(json_Area_Sobreposicion_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Area_Sobreposicion_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Sobreposicion_14.addFeatures(features_Area_Sobreposicion_14);
var lyr_Area_Sobreposicion_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_Sobreposicion_14, 
                style: style_Area_Sobreposicion_14,
                interactive: true,
                title: '<img src="styles/legend/Area_Sobreposicion_14.png" /> Area_Sobreposicion'
            });
var format_Vertices_Propuestos_UT_Solicitante_15 = new ol.format.GeoJSON();
var features_Vertices_Propuestos_UT_Solicitante_15 = format_Vertices_Propuestos_UT_Solicitante_15.readFeatures(json_Vertices_Propuestos_UT_Solicitante_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Vertices_Propuestos_UT_Solicitante_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vertices_Propuestos_UT_Solicitante_15.addFeatures(features_Vertices_Propuestos_UT_Solicitante_15);
var lyr_Vertices_Propuestos_UT_Solicitante_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vertices_Propuestos_UT_Solicitante_15, 
                style: style_Vertices_Propuestos_UT_Solicitante_15,
                interactive: true,
                title: '<img src="styles/legend/Vertices_Propuestos_UT_Solicitante_15.png" /> Vertices_Propuestos_UT_Solicitante'
            });
var format_Vertices_Propuestos_UT_Colindante_16 = new ol.format.GeoJSON();
var features_Vertices_Propuestos_UT_Colindante_16 = format_Vertices_Propuestos_UT_Colindante_16.readFeatures(json_Vertices_Propuestos_UT_Colindante_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Vertices_Propuestos_UT_Colindante_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vertices_Propuestos_UT_Colindante_16.addFeatures(features_Vertices_Propuestos_UT_Colindante_16);
var lyr_Vertices_Propuestos_UT_Colindante_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vertices_Propuestos_UT_Colindante_16, 
                style: style_Vertices_Propuestos_UT_Colindante_16,
                interactive: true,
                title: '<img src="styles/legend/Vertices_Propuestos_UT_Colindante_16.png" /> Vertices_Propuestos_UT_Colindante'
            });
var format_Limite_Propuesto_UT_Solicitante_17 = new ol.format.GeoJSON();
var features_Limite_Propuesto_UT_Solicitante_17 = format_Limite_Propuesto_UT_Solicitante_17.readFeatures(json_Limite_Propuesto_UT_Solicitante_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Limite_Propuesto_UT_Solicitante_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Propuesto_UT_Solicitante_17.addFeatures(features_Limite_Propuesto_UT_Solicitante_17);
var lyr_Limite_Propuesto_UT_Solicitante_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Propuesto_UT_Solicitante_17, 
                style: style_Limite_Propuesto_UT_Solicitante_17,
                interactive: true,
                title: '<img src="styles/legend/Limite_Propuesto_UT_Solicitante_17.png" /> Limite_Propuesto_UT_Solicitante'
            });
var format_Limite_Propuesto_UT_Colindante_18 = new ol.format.GeoJSON();
var features_Limite_Propuesto_UT_Colindante_18 = format_Limite_Propuesto_UT_Colindante_18.readFeatures(json_Limite_Propuesto_UT_Colindante_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Limite_Propuesto_UT_Colindante_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Propuesto_UT_Colindante_18.addFeatures(features_Limite_Propuesto_UT_Colindante_18);
var lyr_Limite_Propuesto_UT_Colindante_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Propuesto_UT_Colindante_18, 
                style: style_Limite_Propuesto_UT_Colindante_18,
                interactive: true,
                title: '<img src="styles/legend/Limite_Propuesto_UT_Colindante_18.png" /> Limite_Propuesto_UT_Colindante'
            });
var format_Comunidades_Propuestas_UT_Solicitante_19 = new ol.format.GeoJSON();
var features_Comunidades_Propuestas_UT_Solicitante_19 = format_Comunidades_Propuestas_UT_Solicitante_19.readFeatures(json_Comunidades_Propuestas_UT_Solicitante_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Comunidades_Propuestas_UT_Solicitante_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_Propuestas_UT_Solicitante_19.addFeatures(features_Comunidades_Propuestas_UT_Solicitante_19);
var lyr_Comunidades_Propuestas_UT_Solicitante_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunidades_Propuestas_UT_Solicitante_19, 
                style: style_Comunidades_Propuestas_UT_Solicitante_19,
                interactive: true,
                title: '<img src="styles/legend/Comunidades_Propuestas_UT_Solicitante_19.png" /> Comunidades_Propuestas_UT_Solicitante'
            });
var format_Comunidades_Propuestas_UT_Colindante_20 = new ol.format.GeoJSON();
var features_Comunidades_Propuestas_UT_Colindante_20 = format_Comunidades_Propuestas_UT_Colindante_20.readFeatures(json_Comunidades_Propuestas_UT_Colindante_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Comunidades_Propuestas_UT_Colindante_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_Propuestas_UT_Colindante_20.addFeatures(features_Comunidades_Propuestas_UT_Colindante_20);
var lyr_Comunidades_Propuestas_UT_Colindante_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunidades_Propuestas_UT_Colindante_20, 
                style: style_Comunidades_Propuestas_UT_Colindante_20,
                interactive: true,
                title: '<img src="styles/legend/Comunidades_Propuestas_UT_Colindante_20.png" /> Comunidades_Propuestas_UT_Colindante'
            });
var format_Vertices_Propuestos_UT_Solicitante_21 = new ol.format.GeoJSON();
var features_Vertices_Propuestos_UT_Solicitante_21 = format_Vertices_Propuestos_UT_Solicitante_21.readFeatures(json_Vertices_Propuestos_UT_Solicitante_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Vertices_Propuestos_UT_Solicitante_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vertices_Propuestos_UT_Solicitante_21.addFeatures(features_Vertices_Propuestos_UT_Solicitante_21);
var lyr_Vertices_Propuestos_UT_Solicitante_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vertices_Propuestos_UT_Solicitante_21, 
                style: style_Vertices_Propuestos_UT_Solicitante_21,
                interactive: true,
                title: '<img src="styles/legend/Vertices_Propuestos_UT_Solicitante_21.png" /> Vertices_Propuestos_UT_Solicitante'
            });
var format_Vertices_Propuestos_UT_Colindante_22 = new ol.format.GeoJSON();
var features_Vertices_Propuestos_UT_Colindante_22 = format_Vertices_Propuestos_UT_Colindante_22.readFeatures(json_Vertices_Propuestos_UT_Colindante_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Vertices_Propuestos_UT_Colindante_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vertices_Propuestos_UT_Colindante_22.addFeatures(features_Vertices_Propuestos_UT_Colindante_22);
var lyr_Vertices_Propuestos_UT_Colindante_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vertices_Propuestos_UT_Colindante_22, 
                style: style_Vertices_Propuestos_UT_Colindante_22,
                interactive: true,
                title: '<img src="styles/legend/Vertices_Propuestos_UT_Colindante_22.png" /> Vertices_Propuestos_UT_Colindante'
            });
var format_Limite_Propuesto_UT_Solicitante_23 = new ol.format.GeoJSON();
var features_Limite_Propuesto_UT_Solicitante_23 = format_Limite_Propuesto_UT_Solicitante_23.readFeatures(json_Limite_Propuesto_UT_Solicitante_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Limite_Propuesto_UT_Solicitante_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Propuesto_UT_Solicitante_23.addFeatures(features_Limite_Propuesto_UT_Solicitante_23);
var lyr_Limite_Propuesto_UT_Solicitante_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Propuesto_UT_Solicitante_23, 
                style: style_Limite_Propuesto_UT_Solicitante_23,
                interactive: true,
                title: '<img src="styles/legend/Limite_Propuesto_UT_Solicitante_23.png" /> Limite_Propuesto_UT_Solicitante'
            });
var format_Limite_Propuesto_UT_Colindante_24 = new ol.format.GeoJSON();
var features_Limite_Propuesto_UT_Colindante_24 = format_Limite_Propuesto_UT_Colindante_24.readFeatures(json_Limite_Propuesto_UT_Colindante_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Limite_Propuesto_UT_Colindante_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Propuesto_UT_Colindante_24.addFeatures(features_Limite_Propuesto_UT_Colindante_24);
var lyr_Limite_Propuesto_UT_Colindante_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Propuesto_UT_Colindante_24, 
                style: style_Limite_Propuesto_UT_Colindante_24,
                interactive: true,
                title: '<img src="styles/legend/Limite_Propuesto_UT_Colindante_24.png" /> Limite_Propuesto_UT_Colindante'
            });
var format_Comunidades_Propuestas_UT_Solicitante_25 = new ol.format.GeoJSON();
var features_Comunidades_Propuestas_UT_Solicitante_25 = format_Comunidades_Propuestas_UT_Solicitante_25.readFeatures(json_Comunidades_Propuestas_UT_Solicitante_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Comunidades_Propuestas_UT_Solicitante_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_Propuestas_UT_Solicitante_25.addFeatures(features_Comunidades_Propuestas_UT_Solicitante_25);
var lyr_Comunidades_Propuestas_UT_Solicitante_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunidades_Propuestas_UT_Solicitante_25, 
                style: style_Comunidades_Propuestas_UT_Solicitante_25,
                interactive: true,
                title: '<img src="styles/legend/Comunidades_Propuestas_UT_Solicitante_25.png" /> Comunidades_Propuestas_UT_Solicitante'
            });
var format_Comunidades_Propuestas_UT_Colindante_26 = new ol.format.GeoJSON();
var features_Comunidades_Propuestas_UT_Colindante_26 = format_Comunidades_Propuestas_UT_Colindante_26.readFeatures(json_Comunidades_Propuestas_UT_Colindante_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Comunidades_Propuestas_UT_Colindante_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_Propuestas_UT_Colindante_26.addFeatures(features_Comunidades_Propuestas_UT_Colindante_26);
var lyr_Comunidades_Propuestas_UT_Colindante_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunidades_Propuestas_UT_Colindante_26, 
                style: style_Comunidades_Propuestas_UT_Colindante_26,
                interactive: true,
                title: '<img src="styles/legend/Comunidades_Propuestas_UT_Colindante_26.png" /> Comunidades_Propuestas_UT_Colindante'
            });
var format_A_Vertices_Inicio_SOL_20S_27 = new ol.format.GeoJSON();
var features_A_Vertices_Inicio_SOL_20S_27 = format_A_Vertices_Inicio_SOL_20S_27.readFeatures(json_A_Vertices_Inicio_SOL_20S_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_A_Vertices_Inicio_SOL_20S_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Vertices_Inicio_SOL_20S_27.addFeatures(features_A_Vertices_Inicio_SOL_20S_27);
var lyr_A_Vertices_Inicio_SOL_20S_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Vertices_Inicio_SOL_20S_27, 
                style: style_A_Vertices_Inicio_SOL_20S_27,
                interactive: true,
                title: '<img src="styles/legend/A_Vertices_Inicio_SOL_20S_27.png" /> A_Vertices_Inicio_SOL_20S'
            });
var format_A_Limite_Tramo_Inicio_SOL_20S_28 = new ol.format.GeoJSON();
var features_A_Limite_Tramo_Inicio_SOL_20S_28 = format_A_Limite_Tramo_Inicio_SOL_20S_28.readFeatures(json_A_Limite_Tramo_Inicio_SOL_20S_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_A_Limite_Tramo_Inicio_SOL_20S_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Limite_Tramo_Inicio_SOL_20S_28.addFeatures(features_A_Limite_Tramo_Inicio_SOL_20S_28);
var lyr_A_Limite_Tramo_Inicio_SOL_20S_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Limite_Tramo_Inicio_SOL_20S_28, 
                style: style_A_Limite_Tramo_Inicio_SOL_20S_28,
                interactive: true,
                title: '<img src="styles/legend/A_Limite_Tramo_Inicio_SOL_20S_28.png" /> A_Limite_Tramo_Inicio_SOL_20S'
            });
var format_A_Comunidades_Inicio_SOL_20S_29 = new ol.format.GeoJSON();
var features_A_Comunidades_Inicio_SOL_20S_29 = format_A_Comunidades_Inicio_SOL_20S_29.readFeatures(json_A_Comunidades_Inicio_SOL_20S_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_A_Comunidades_Inicio_SOL_20S_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_A_Comunidades_Inicio_SOL_20S_29.addFeatures(features_A_Comunidades_Inicio_SOL_20S_29);
var lyr_A_Comunidades_Inicio_SOL_20S_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_A_Comunidades_Inicio_SOL_20S_29, 
                style: style_A_Comunidades_Inicio_SOL_20S_29,
                interactive: true,
                title: '<img src="styles/legend/A_Comunidades_Inicio_SOL_20S_29.png" /> A_Comunidades_Inicio_SOL_20S'
            });
var format_Departamento_30 = new ol.format.GeoJSON();
var features_Departamento_30 = format_Departamento_30.readFeatures(json_Departamento_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Departamento_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_30.addFeatures(features_Departamento_30);
var lyr_Departamento_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamento_30, 
                style: style_Departamento_30,
                interactive: true,
                title: '<img src="styles/legend/Departamento_30.png" /> Departamento'
            });
var format_GAIOCSantaCruz_31 = new ol.format.GeoJSON();
var features_GAIOCSantaCruz_31 = format_GAIOCSantaCruz_31.readFeatures(json_GAIOCSantaCruz_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_GAIOCSantaCruz_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAIOCSantaCruz_31.addFeatures(features_GAIOCSantaCruz_31);
var lyr_GAIOCSantaCruz_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GAIOCSantaCruz_31, 
                style: style_GAIOCSantaCruz_31,
                interactive: true,
                title: '<img src="styles/legend/GAIOCSantaCruz_31.png" /> GAIOC Santa Cruz'
            });
var format_Ley_Poligonos_32 = new ol.format.GeoJSON();
var features_Ley_Poligonos_32 = format_Ley_Poligonos_32.readFeatures(json_Ley_Poligonos_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Ley_Poligonos_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ley_Poligonos_32.addFeatures(features_Ley_Poligonos_32);
var lyr_Ley_Poligonos_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ley_Poligonos_32, 
                style: style_Ley_Poligonos_32,
                interactive: true,
                title: '<img src="styles/legend/Ley_Poligonos_32.png" /> Ley_Poligonos'
            });
var format_PisoFirmez20s_33 = new ol.format.GeoJSON();
var features_PisoFirmez20s_33 = format_PisoFirmez20s_33.readFeatures(json_PisoFirmez20s_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_PisoFirmez20s_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PisoFirmez20s_33.addFeatures(features_PisoFirmez20s_33);
var lyr_PisoFirmez20s_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PisoFirmez20s_33, 
                style: style_PisoFirmez20s_33,
                interactive: true,
                title: '<img src="styles/legend/PisoFirmez20s_33.png" /> Piso Firme z20s'
            });
var format_Ley_Tramos_WGS84_Z20s_34 = new ol.format.GeoJSON();
var features_Ley_Tramos_WGS84_Z20s_34 = format_Ley_Tramos_WGS84_Z20s_34.readFeatures(json_Ley_Tramos_WGS84_Z20s_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32720'});
var jsonSource_Ley_Tramos_WGS84_Z20s_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ley_Tramos_WGS84_Z20s_34.addFeatures(features_Ley_Tramos_WGS84_Z20s_34);
var lyr_Ley_Tramos_WGS84_Z20s_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ley_Tramos_WGS84_Z20s_34, 
                style: style_Ley_Tramos_WGS84_Z20s_34,
                interactive: true,
                title: '<img src="styles/legend/Ley_Tramos_WGS84_Z20s_34.png" /> Ley_Tramos_WGS84_Z20s'
            });
var group_67SanJavierSanJulian = new ol.layer.Group({
                                layers: [lyr_A_Vertices_Inicio_SOL_20S_27,lyr_A_Limite_Tramo_Inicio_SOL_20S_28,lyr_A_Comunidades_Inicio_SOL_20S_29,],
                                title: "67 San Javier - San Julian"});
var group_76SantaCruzLaGuardia = new ol.layer.Group({
                                layers: [lyr_Vertices_Propuestos_UT_Solicitante_21,lyr_Vertices_Propuestos_UT_Colindante_22,lyr_Limite_Propuesto_UT_Solicitante_23,lyr_Limite_Propuesto_UT_Colindante_24,lyr_Comunidades_Propuestas_UT_Solicitante_25,lyr_Comunidades_Propuestas_UT_Colindante_26,],
                                title: "76 Santa Cruz - La Guardia"});
var group_90MairanaPampaGrande = new ol.layer.Group({
                                layers: [lyr_Vertices_No_Conciliados_Campo_9,lyr_Vertices_Conciliados_Campo_10,lyr_Limite_No_Conciliado_Campo_11,lyr_Limite_Conciliado_Campo_12,lyr_Comunidades_Campo_13,lyr_Area_Sobreposicion_14,lyr_Vertices_Propuestos_UT_Solicitante_21,lyr_Vertices_Propuestos_UT_Colindante_22,lyr_Limite_Propuesto_UT_Solicitante_23,lyr_Limite_Propuesto_UT_Colindante_24,lyr_Comunidades_Propuestas_UT_Solicitante_25,lyr_Comunidades_Propuestas_UT_Colindante_26,],
                                title: "90 Mairana - Pampa Grande"});
var group_90CotocaSantaCruz = new ol.layer.Group({
                                layers: [lyr_AREA_NO_CONCILIADA_FINAL_20S_3,lyr_VERTICES_NO_CONCILIADOS_FINAL_20S_4,lyr_VERTICES_CONCILIADOS_FINAL_20S_5,lyr_LIMITE_NO_CONCILIADO_FINAL_20S_6,lyr_LIMITE_CONCILIADO_FINAL_20S_7,lyr_COMUNIDADES_FINAL_20S_8,],
                                title: "90 Cotoca - Santa Cruz"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_Bingmaps_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Bingmaps_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_AREA_NO_CONCILIADA_FINAL_20S_3.setVisible(true);lyr_VERTICES_NO_CONCILIADOS_FINAL_20S_4.setVisible(true);lyr_VERTICES_CONCILIADOS_FINAL_20S_5.setVisible(true);lyr_LIMITE_NO_CONCILIADO_FINAL_20S_6.setVisible(true);lyr_LIMITE_CONCILIADO_FINAL_20S_7.setVisible(true);lyr_COMUNIDADES_FINAL_20S_8.setVisible(true);lyr_Vertices_No_Conciliados_Campo_9.setVisible(true);lyr_Vertices_Conciliados_Campo_10.setVisible(true);lyr_Limite_No_Conciliado_Campo_11.setVisible(true);lyr_Limite_Conciliado_Campo_12.setVisible(true);lyr_Comunidades_Campo_13.setVisible(true);lyr_Area_Sobreposicion_14.setVisible(true);lyr_Vertices_Propuestos_UT_Solicitante_15.setVisible(true);lyr_Vertices_Propuestos_UT_Colindante_16.setVisible(true);lyr_Limite_Propuesto_UT_Solicitante_17.setVisible(true);lyr_Limite_Propuesto_UT_Colindante_18.setVisible(true);lyr_Comunidades_Propuestas_UT_Solicitante_19.setVisible(true);lyr_Comunidades_Propuestas_UT_Colindante_20.setVisible(true);lyr_Vertices_Propuestos_UT_Solicitante_21.setVisible(true);lyr_Vertices_Propuestos_UT_Colindante_22.setVisible(true);lyr_Limite_Propuesto_UT_Solicitante_23.setVisible(true);lyr_Limite_Propuesto_UT_Colindante_24.setVisible(true);lyr_Comunidades_Propuestas_UT_Solicitante_25.setVisible(true);lyr_Comunidades_Propuestas_UT_Colindante_26.setVisible(true);lyr_A_Vertices_Inicio_SOL_20S_27.setVisible(true);lyr_A_Limite_Tramo_Inicio_SOL_20S_28.setVisible(true);lyr_A_Comunidades_Inicio_SOL_20S_29.setVisible(true);lyr_Departamento_30.setVisible(true);lyr_GAIOCSantaCruz_31.setVisible(true);lyr_Ley_Poligonos_32.setVisible(true);lyr_PisoFirmez20s_33.setVisible(true);lyr_Ley_Tramos_WGS84_Z20s_34.setVisible(true);
var layersList = [group_MapasBase,group_90CotocaSantaCruz,group_90MairanaPampaGrande,group_67SanJavierSanJulian,lyr_Departamento_30,lyr_GAIOCSantaCruz_31,lyr_Ley_Poligonos_32,lyr_PisoFirmez20s_33,lyr_Ley_Tramos_WGS84_Z20s_34];
lyr_AREA_NO_CONCILIADA_FINAL_20S_3.set('fieldAliases', {'Id': 'Id', 'ID_AREA': 'ID_AREA', 'TRAMO': 'TRAMO', 'SUP_KM2': 'SUP_KM2', 'NIVEL_C': 'NIVEL_C', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', });
lyr_VERTICES_NO_CONCILIADOS_FINAL_20S_4.set('fieldAliases', {'Id': 'Id', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'Z_UTM': 'Z_UTM', 'TIPO_LIMIT': 'TIPO_LIMIT', 'ID_EXP': 'ID_EXP', 'ID_PROP': 'ID_PROP', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_VERTICES_CONCILIADOS_FINAL_20S_5.set('fieldAliases', {'COD_ACTA': 'COD_ACTA', 'ID_VERTICE': 'ID_VERTICE', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'ZUTM': 'ZUTM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'DESCRIPC': 'DESCRIPC', 'NOM_MOJON': 'NOM_MOJON', 'ID_PROP': 'ID_PROP', 'RASTERVALU': 'RASTERVALU', });
lyr_LIMITE_NO_CONCILIADO_FINAL_20S_6.set('fieldAliases', {'Id': 'Id', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'Z_UTM': 'Z_UTM', 'TIPO_LIMIT': 'TIPO_LIMIT', 'ID_EXP': 'ID_EXP', 'ID_PROP': 'ID_PROP', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_LIMITE_CONCILIADO_FINAL_20S_7.set('fieldAliases', {'Id': 'Id', 'ID_TRAMO': 'ID_TRAMO', 'Longitud': 'Longitud', });
lyr_COMUNIDADES_FINAL_20S_8.set('fieldAliases', {'ID_UT': 'ID_UT', 'ID_PROP': 'ID_PROP', 'NOM_COM': 'NOM_COM', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Z_UTM': 'Z_UTM', });
lyr_Vertices_No_Conciliados_Campo_9.set('fieldAliases', {'COD_ACTA': 'COD_ACTA', 'ID_VERTICE': 'ID_VERTICE', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Z_UTM': 'Z_UTM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'DESCRIPC': 'DESCRIPC', 'NOM_MOJON': 'NOM_MOJON', 'ID_PROP': 'ID_PROP', 'TIPO_ACTA': 'TIPO_ACTA', 'TIPO_VERT': 'TIPO_VERT', 'LAT_GD': 'LAT_GD', 'LONG_GD': 'LONG_GD', });
lyr_Vertices_Conciliados_Campo_10.set('fieldAliases', {'COD_ACTA': 'COD_ACTA', 'ID_VERTICE': 'ID_VERTICE', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'ZUTM': 'ZUTM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'DESCRIPC': 'DESCRIPC', 'NOM_MOJON': 'NOM_MOJON', 'ID_PROP': 'ID_PROP', 'TIPO_ACTA': 'TIPO_ACTA', 'TIPO_VERT': 'TIPO_VERT', 'LAT_GD': 'LAT_GD', 'LONG_GD': 'LONG_GD', });
lyr_Limite_No_Conciliado_Campo_11.set('fieldAliases', {'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'Z_UTM': 'Z_UTM', 'TIPO_LIMIT': 'TIPO_LIMIT', 'ID_EXP': 'ID_EXP', 'ID_PROP': 'ID_PROP', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_Limite_Conciliado_Campo_12.set('fieldAliases', {'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'Z_UTM': 'Z_UTM', 'TIPO_LIMIT': 'TIPO_LIMIT', 'ID_EXP': 'ID_EXP', 'ID_PROP': 'ID_PROP', 'SHAPE_LENG': 'SHAPE_LENG', });
lyr_Comunidades_Campo_13.set('fieldAliases', {'ID_UT': 'ID_UT', 'ID_PROP': 'ID_PROP', 'NOM_COM': 'NOM_COM', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Z_UTM': 'Z_UTM', 'Lat': 'Lat', 'Log': 'Log', });
lyr_Area_Sobreposicion_14.set('fieldAliases', {'ID_AREA': 'ID_AREA', 'TRAMO': 'TRAMO', 'SUP_KM2': 'SUP_KM2', 'NIVEL_C': 'NIVEL_C', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', });
lyr_Vertices_Propuestos_UT_Solicitante_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_VÉRTIC': 'ID_VÉRTIC', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Z_UTM': 'Z_UTM', 'DESCRIPCI': 'DESCRIPCI', 'DMSLat': 'DMSLat', 'DMSLon': 'DMSLon', 'ORIG_OID': 'ORIG_OID', });
lyr_Vertices_Propuestos_UT_Colindante_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VERTICE': 'VERTICE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_Limite_Propuesto_UT_Solicitante_17.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'ZONA': 'ZONA', 'SOLICITANT': 'SOLICITANT', 'COLINDANCI': 'COLINDANCI', 'DISTANCIA': 'DISTANCIA', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Dist_Km_VM': 'Dist_Km_VM', });
lyr_Limite_Propuesto_UT_Colindante_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'ZONA': 'ZONA', 'SOLICITANT': 'SOLICITANT', 'COLINDANCI': 'COLINDANCI', 'DISTANCIA': 'DISTANCIA', 'KM': 'KM', 'DISTRITO': 'DISTRITO', 'type': 'type', 'ident': 'ident', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'y_proj': 'y_proj', 'x_proj': 'x_proj', 'comment': 'comment', 'display': 'display', 'symbol': 'symbol', 'dist': 'dist', 'proximity': 'proximity', 'color': 'color', 'altitude': 'altitude', 'depth': 'depth', 'temp': 'temp', 'time': 'time', 'wpt_class': 'wpt_class', 'sub_class': 'sub_class', 'attrib': 'attrib', 'link': 'link', 'state': 'state', 'country': 'country', 'city': 'city', 'address': 'address', 'zip': 'zip', 'facility': 'facility', 'crossroad': 'crossroad', 'ete': 'ete', 'dtype': 'dtype', 'model': 'model', 'filename': 'filename', 'ltime': 'ltime', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'desc_': 'desc_', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'dir': 'dir', 'Shape_Leng': 'Shape_Leng', });
lyr_Comunidades_Propuestas_UT_Solicitante_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'ID_UT': 'ID_UT', 'ID_PROP': 'ID_PROP', 'NOM_COM': 'NOM_COM', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Z_UTM': 'Z_UTM', 'DMSLat': 'DMSLat', 'DMSLon': 'DMSLon', 'ORIG_OID': 'ORIG_OID', });
lyr_Comunidades_Propuestas_UT_Colindante_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'DESCRIPCIO': 'DESCRIPCIO', 'VERTICE': 'VERTICE', });
lyr_Vertices_Propuestos_UT_Solicitante_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_VÉRTIC': 'ID_VÉRTIC', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Z_UTM': 'Z_UTM', 'DESCRIPCI': 'DESCRIPCI', 'DMSLat': 'DMSLat', 'DMSLon': 'DMSLon', 'ORIG_OID': 'ORIG_OID', });
lyr_Vertices_Propuestos_UT_Colindante_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VERTICE': 'VERTICE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'DESCRIPCIO': 'DESCRIPCIO', });
lyr_Limite_Propuesto_UT_Solicitante_23.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'ZONA': 'ZONA', 'SOLICITANT': 'SOLICITANT', 'COLINDANCI': 'COLINDANCI', 'DISTANCIA': 'DISTANCIA', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Dist_Km_VM': 'Dist_Km_VM', });
lyr_Limite_Propuesto_UT_Colindante_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'ZONA': 'ZONA', 'SOLICITANT': 'SOLICITANT', 'COLINDANCI': 'COLINDANCI', 'DISTANCIA': 'DISTANCIA', 'KM': 'KM', 'DISTRITO': 'DISTRITO', 'type': 'type', 'ident': 'ident', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'y_proj': 'y_proj', 'x_proj': 'x_proj', 'comment': 'comment', 'display': 'display', 'symbol': 'symbol', 'dist': 'dist', 'proximity': 'proximity', 'color': 'color', 'altitude': 'altitude', 'depth': 'depth', 'temp': 'temp', 'time': 'time', 'wpt_class': 'wpt_class', 'sub_class': 'sub_class', 'attrib': 'attrib', 'link': 'link', 'state': 'state', 'country': 'country', 'city': 'city', 'address': 'address', 'zip': 'zip', 'facility': 'facility', 'crossroad': 'crossroad', 'ete': 'ete', 'dtype': 'dtype', 'model': 'model', 'filename': 'filename', 'ltime': 'ltime', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'desc_': 'desc_', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'dir': 'dir', 'Shape_Leng': 'Shape_Leng', });
lyr_Comunidades_Propuestas_UT_Solicitante_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'ID_UT': 'ID_UT', 'ID_PROP': 'ID_PROP', 'NOM_COM': 'NOM_COM', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Z_UTM': 'Z_UTM', 'DMSLat': 'DMSLat', 'DMSLon': 'DMSLon', 'ORIG_OID': 'ORIG_OID', });
lyr_Comunidades_Propuestas_UT_Colindante_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'DESCRIPCIO': 'DESCRIPCIO', 'VERTICE': 'VERTICE', });
lyr_A_Vertices_Inicio_SOL_20S_27.set('fieldAliases', {'ID_VERTICE': 'ID_VERTICE', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Z_UTM': 'Z_UTM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'DESCRIPCIO': 'DESCRIPCIO', 'ID_PROY': 'ID_PROY', 'LAT': 'LAT', 'LON': 'LON', });
lyr_A_Limite_Tramo_Inicio_SOL_20S_28.set('fieldAliases', {'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'Z_UTM': 'Z_UTM', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_A_Comunidades_Inicio_SOL_20S_29.set('fieldAliases', {'ID_UT': 'ID_UT', 'ID_PROP': 'ID_PROP', 'NOM_COM': 'NOM_COM', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Z_UTM': 'Z_UTM', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'LAT': 'LAT', 'LON': 'LON', });
lyr_Departamento_30.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SUPERF_KM2': 'SUPERF_KM2', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'CAPITAL': 'CAPITAL', 'F_LEY_PROV': 'F_LEY_PROV', 'LEY_MUN': 'LEY_MUN', 'F_LEY_MUN': 'F_LEY_MUN', 'COD_MUN': 'COD_MUN', 'COD_PROV': 'COD_PROV', 'SHAPE_Leng': 'SHAPE_Leng', 'MUN_TIOC': 'MUN_TIOC', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_GAIOCSantaCruz_31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'C_UT': 'C_UT', 'DEPARTAMEN': 'DEPARTAMEN', 'SEC_PROV': 'SEC_PROV', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'N°_LEY': 'N°_LEY', 'FECHA_LEY': 'FECHA_LEY', 'ID_ESTADO': 'ID_ESTADO', 'ESTADO': 'ESTADO', 'ZONA': 'ZONA', 'ID_UT': 'ID_UT', 'BL_COMLIT_': 'BL_COMLIT_', 'BL_COMLIT1': 'BL_COMLIT1', 'BL_COMLI_M': 'BL_COMLI_M', 'CAPITAL': 'CAPITAL', 'C_SIOT': 'C_SIOT', 'OBS_': 'OBS_', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Ley_Poligonos_32.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SUPERF_KM2': 'SUPERF_KM2', 'DEPARTAMEN': 'DEPARTAMEN', 'PROVINCIA': 'PROVINCIA', 'CAPITAL': 'CAPITAL', 'F_LEY_PROV': 'F_LEY_PROV', 'LEY_MUN': 'LEY_MUN', 'F_LEY_MUN': 'F_LEY_MUN', 'COD_MUN': 'COD_MUN', 'COD_PROV': 'COD_PROV', 'SHAPE_Leng': 'SHAPE_Leng', 'MUN_TIOC': 'MUN_TIOC', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_PisoFirmez20s_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_SIOT': 'COD_SIOT', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'FECHA_LEY': 'FECHA_LEY', 'ID_EXP': 'ID_EXP', 'LIMITE': 'LIMITE', 'ESTADO': 'ESTADO', 'TIPO_LIMIT': 'TIPO_LIMIT', 'Z_UTM': 'Z_UTM', 'LEY': 'LEY', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Ley_Tramos_WGS84_Z20s_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_LIMITE': 'ID_LIMITE', 'ID_TRAMO': 'ID_TRAMO', 'DIST_KM': 'DIST_KM', 'ESTADO': 'ESTADO', 'Z_UTM': 'Z_UTM', 'N_LEY': 'N_LEY', 'FECHA_LEY': 'FECHA_LEY', 'ID_ARCHIVO': 'ID_ARCHIVO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Le_2': 'SHAPE_Le_2', });
lyr_AREA_NO_CONCILIADA_FINAL_20S_3.set('fieldImages', {'Id': 'TextEdit', 'ID_AREA': 'TextEdit', 'TRAMO': 'TextEdit', 'SUP_KM2': 'TextEdit', 'NIVEL_C': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', });
lyr_VERTICES_NO_CONCILIADOS_FINAL_20S_4.set('fieldImages', {'Id': '', 'ID_LIMITE': '', 'ID_TRAMO': '', 'DIST_KM': '', 'Z_UTM': '', 'TIPO_LIMIT': '', 'ID_EXP': '', 'ID_PROP': '', 'SHAPE_LENG': '', });
lyr_VERTICES_CONCILIADOS_FINAL_20S_5.set('fieldImages', {'COD_ACTA': '', 'ID_VERTICE': '', 'ESTE': '', 'NORTE': '', 'ZUTM': '', 'LATITUD': '', 'LONGITUD': '', 'DESCRIPC': '', 'NOM_MOJON': '', 'ID_PROP': '', 'RASTERVALU': '', });
lyr_LIMITE_NO_CONCILIADO_FINAL_20S_6.set('fieldImages', {'Id': '', 'ID_LIMITE': '', 'ID_TRAMO': '', 'DIST_KM': '', 'Z_UTM': '', 'TIPO_LIMIT': '', 'ID_EXP': '', 'ID_PROP': '', 'SHAPE_LENG': '', });
lyr_LIMITE_CONCILIADO_FINAL_20S_7.set('fieldImages', {'Id': '', 'ID_TRAMO': '', 'Longitud': '', });
lyr_COMUNIDADES_FINAL_20S_8.set('fieldImages', {'ID_UT': '', 'ID_PROP': '', 'NOM_COM': '', 'ESTE': '', 'NORTE': '', 'Z_UTM': '', });
lyr_Vertices_No_Conciliados_Campo_9.set('fieldImages', {'COD_ACTA': '', 'ID_VERTICE': '', 'ESTE': '', 'NORTE': '', 'Z_UTM': '', 'LATITUD': '', 'LONGITUD': '', 'DESCRIPC': '', 'NOM_MOJON': '', 'ID_PROP': '', 'TIPO_ACTA': '', 'TIPO_VERT': '', 'LAT_GD': '', 'LONG_GD': '', });
lyr_Vertices_Conciliados_Campo_10.set('fieldImages', {'COD_ACTA': '', 'ID_VERTICE': '', 'ESTE': '', 'NORTE': '', 'ZUTM': '', 'LATITUD': '', 'LONGITUD': '', 'DESCRIPC': '', 'NOM_MOJON': '', 'ID_PROP': '', 'TIPO_ACTA': '', 'TIPO_VERT': '', 'LAT_GD': '', 'LONG_GD': '', });
lyr_Limite_No_Conciliado_Campo_11.set('fieldImages', {'ID_LIMITE': '', 'ID_TRAMO': '', 'DIST_KM': '', 'Z_UTM': '', 'TIPO_LIMIT': '', 'ID_EXP': '', 'ID_PROP': '', 'SHAPE_LENG': '', });
lyr_Limite_Conciliado_Campo_12.set('fieldImages', {'ID_LIMITE': '', 'ID_TRAMO': '', 'DIST_KM': '', 'Z_UTM': '', 'TIPO_LIMIT': '', 'ID_EXP': '', 'ID_PROP': '', 'SHAPE_LENG': '', });
lyr_Comunidades_Campo_13.set('fieldImages', {'ID_UT': '', 'ID_PROP': '', 'NOM_COM': '', 'ESTE': '', 'NORTE': '', 'Z_UTM': '', 'Lat': '', 'Log': '', });
lyr_Area_Sobreposicion_14.set('fieldImages', {'ID_AREA': '', 'TRAMO': '', 'SUP_KM2': '', 'NIVEL_C': '', 'SHAPE_LENG': '', 'SHAPE_AREA': '', });
lyr_Vertices_Propuestos_UT_Solicitante_15.set('fieldImages', {'OBJECTID': '', 'ID_VÉRTIC': '', 'ESTE': '', 'NORTE': '', 'Z_UTM': '', 'DESCRIPCI': '', 'DMSLat': '', 'DMSLon': '', 'ORIG_OID': '', });
lyr_Vertices_Propuestos_UT_Colindante_16.set('fieldImages', {'OBJECTID': '', 'VERTICE': '', 'LATITUD': '', 'LONGITUD': '', 'ESTE': '', 'NORTE': '', 'DESCRIPCIO': '', });
lyr_Limite_Propuesto_UT_Solicitante_17.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'Id': '', 'ZONA': '', 'SOLICITANT': '', 'COLINDANCI': '', 'DISTANCIA': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Dist_Km_VM': '', });
lyr_Limite_Propuesto_UT_Colindante_18.set('fieldImages', {'OBJECTID': '', 'Id': '', 'ZONA': '', 'SOLICITANT': '', 'COLINDANCI': '', 'DISTANCIA': '', 'KM': '', 'DISTRITO': '', 'type': '', 'ident': '', 'Latitude': '', 'Longitude': '', 'y_proj': '', 'x_proj': '', 'comment': '', 'display': '', 'symbol': '', 'dist': '', 'proximity': '', 'color': '', 'altitude': '', 'depth': '', 'temp': '', 'time': '', 'wpt_class': '', 'sub_class': '', 'attrib': '', 'link': '', 'state': '', 'country': '', 'city': '', 'address': '', 'zip': '', 'facility': '', 'crossroad': '', 'ete': '', 'dtype': '', 'model': '', 'filename': '', 'ltime': '', 'magvar': '', 'geoidheigh': '', 'desc_': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsd': '', 'dgpsid': '', 'dir': '', 'Shape_Leng': '', });
lyr_Comunidades_Propuestas_UT_Solicitante_19.set('fieldImages', {'OBJECTID': '', 'OID_': '', 'ID_UT': '', 'ID_PROP': '', 'NOM_COM': '', 'ESTE': '', 'NORTE': '', 'Z_UTM': '', 'DMSLat': '', 'DMSLon': '', 'ORIG_OID': '', });
lyr_Comunidades_Propuestas_UT_Colindante_20.set('fieldImages', {'OBJECTID': '', 'ID': '', 'LATITUD': '', 'LONGITUD': '', 'ESTE': '', 'NORTE': '', 'DESCRIPCIO': '', 'VERTICE': '', });
lyr_Vertices_Propuestos_UT_Solicitante_21.set('fieldImages', {'OBJECTID': '', 'ID_VÉRTIC': '', 'ESTE': '', 'NORTE': '', 'Z_UTM': '', 'DESCRIPCI': '', 'DMSLat': '', 'DMSLon': '', 'ORIG_OID': '', });
lyr_Vertices_Propuestos_UT_Colindante_22.set('fieldImages', {'OBJECTID': '', 'VERTICE': '', 'LATITUD': '', 'LONGITUD': '', 'ESTE': '', 'NORTE': '', 'DESCRIPCIO': '', });
lyr_Limite_Propuesto_UT_Solicitante_23.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'Id': '', 'ZONA': '', 'SOLICITANT': '', 'COLINDANCI': '', 'DISTANCIA': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Dist_Km_VM': '', });
lyr_Limite_Propuesto_UT_Colindante_24.set('fieldImages', {'OBJECTID': '', 'Id': '', 'ZONA': '', 'SOLICITANT': '', 'COLINDANCI': '', 'DISTANCIA': '', 'KM': '', 'DISTRITO': '', 'type': '', 'ident': '', 'Latitude': '', 'Longitude': '', 'y_proj': '', 'x_proj': '', 'comment': '', 'display': '', 'symbol': '', 'dist': '', 'proximity': '', 'color': '', 'altitude': '', 'depth': '', 'temp': '', 'time': '', 'wpt_class': '', 'sub_class': '', 'attrib': '', 'link': '', 'state': '', 'country': '', 'city': '', 'address': '', 'zip': '', 'facility': '', 'crossroad': '', 'ete': '', 'dtype': '', 'model': '', 'filename': '', 'ltime': '', 'magvar': '', 'geoidheigh': '', 'desc_': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsd': '', 'dgpsid': '', 'dir': '', 'Shape_Leng': '', });
lyr_Comunidades_Propuestas_UT_Solicitante_25.set('fieldImages', {'OBJECTID': '', 'OID_': '', 'ID_UT': '', 'ID_PROP': '', 'NOM_COM': '', 'ESTE': '', 'NORTE': '', 'Z_UTM': '', 'DMSLat': '', 'DMSLon': '', 'ORIG_OID': '', });
lyr_Comunidades_Propuestas_UT_Colindante_26.set('fieldImages', {'OBJECTID': '', 'ID': '', 'LATITUD': '', 'LONGITUD': '', 'ESTE': '', 'NORTE': '', 'DESCRIPCIO': '', 'VERTICE': '', });
lyr_A_Vertices_Inicio_SOL_20S_27.set('fieldImages', {'ID_VERTICE': '', 'ESTE': '', 'NORTE': '', 'Z_UTM': '', 'LATITUD': '', 'LONGITUD': '', 'DESCRIPCIO': '', 'ID_PROY': '', 'LAT': '', 'LON': '', });
lyr_A_Limite_Tramo_Inicio_SOL_20S_28.set('fieldImages', {'ID_LIMITE': '', 'ID_TRAMO': '', 'DIST_KM': '', 'Z_UTM': '', 'SHAPE_Leng': '', });
lyr_A_Comunidades_Inicio_SOL_20S_29.set('fieldImages', {'ID_UT': '', 'ID_PROP': '', 'NOM_COM': '', 'ESTE': '', 'NORTE': '', 'Z_UTM': '', 'LATITUD': '', 'LONGITUD': '', 'LAT': '', 'LON': '', });
lyr_Departamento_30.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'SUPERF_KM2': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CAPITAL': 'TextEdit', 'F_LEY_PROV': 'DateTime', 'LEY_MUN': 'TextEdit', 'F_LEY_MUN': 'DateTime', 'COD_MUN': 'TextEdit', 'COD_PROV': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GAIOCSantaCruz_31.set('fieldImages', {'OBJECTID': 'TextEdit', 'C_UT': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'SEC_PROV': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'N°_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_ESTADO': 'TextEdit', 'ESTADO': 'TextEdit', 'ZONA': 'TextEdit', 'ID_UT': 'TextEdit', 'BL_COMLIT_': 'TextEdit', 'BL_COMLIT1': 'TextEdit', 'BL_COMLI_M': 'TextEdit', 'CAPITAL': 'TextEdit', 'C_SIOT': 'TextEdit', 'OBS_': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Ley_Poligonos_32.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'SUPERF_KM2': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'PROVINCIA': 'TextEdit', 'CAPITAL': 'TextEdit', 'F_LEY_PROV': 'DateTime', 'LEY_MUN': 'TextEdit', 'F_LEY_MUN': 'DateTime', 'COD_MUN': 'TextEdit', 'COD_PROV': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'MUN_TIOC': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PisoFirmez20s_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_SIOT': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_EXP': 'TextEdit', 'LIMITE': 'TextEdit', 'ESTADO': 'TextEdit', 'TIPO_LIMIT': 'TextEdit', 'Z_UTM': 'TextEdit', 'LEY': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Ley_Tramos_WGS84_Z20s_34.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_LIMITE': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'DIST_KM': 'TextEdit', 'ESTADO': 'TextEdit', 'Z_UTM': 'TextEdit', 'N_LEY': 'TextEdit', 'FECHA_LEY': 'DateTime', 'ID_ARCHIVO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', 'SHAPE_Le_2': 'TextEdit', });
lyr_AREA_NO_CONCILIADA_FINAL_20S_3.set('fieldLabels', {});
lyr_VERTICES_NO_CONCILIADOS_FINAL_20S_4.set('fieldLabels', {});
lyr_VERTICES_CONCILIADOS_FINAL_20S_5.set('fieldLabels', {});
lyr_LIMITE_NO_CONCILIADO_FINAL_20S_6.set('fieldLabels', {});
lyr_LIMITE_CONCILIADO_FINAL_20S_7.set('fieldLabels', {});
lyr_COMUNIDADES_FINAL_20S_8.set('fieldLabels', {});
lyr_Vertices_No_Conciliados_Campo_9.set('fieldLabels', {});
lyr_Vertices_Conciliados_Campo_10.set('fieldLabels', {});
lyr_Limite_No_Conciliado_Campo_11.set('fieldLabels', {});
lyr_Limite_Conciliado_Campo_12.set('fieldLabels', {});
lyr_Comunidades_Campo_13.set('fieldLabels', {});
lyr_Area_Sobreposicion_14.set('fieldLabels', {});
lyr_Vertices_Propuestos_UT_Solicitante_15.set('fieldLabels', {});
lyr_Vertices_Propuestos_UT_Colindante_16.set('fieldLabels', {});
lyr_Limite_Propuesto_UT_Solicitante_17.set('fieldLabels', {});
lyr_Limite_Propuesto_UT_Colindante_18.set('fieldLabels', {});
lyr_Comunidades_Propuestas_UT_Solicitante_19.set('fieldLabels', {});
lyr_Comunidades_Propuestas_UT_Colindante_20.set('fieldLabels', {});
lyr_Vertices_Propuestos_UT_Solicitante_21.set('fieldLabels', {});
lyr_Vertices_Propuestos_UT_Colindante_22.set('fieldLabels', {});
lyr_Limite_Propuesto_UT_Solicitante_23.set('fieldLabels', {});
lyr_Limite_Propuesto_UT_Colindante_24.set('fieldLabels', {});
lyr_Comunidades_Propuestas_UT_Solicitante_25.set('fieldLabels', {});
lyr_Comunidades_Propuestas_UT_Colindante_26.set('fieldLabels', {});
lyr_A_Vertices_Inicio_SOL_20S_27.set('fieldLabels', {});
lyr_A_Limite_Tramo_Inicio_SOL_20S_28.set('fieldLabels', {});
lyr_A_Comunidades_Inicio_SOL_20S_29.set('fieldLabels', {});
lyr_Departamento_30.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'SUPERF_KM2': 'no label', 'DEPARTAMEN': 'no label', 'PROVINCIA': 'no label', 'CAPITAL': 'no label', 'F_LEY_PROV': 'no label', 'LEY_MUN': 'no label', 'F_LEY_MUN': 'no label', 'COD_MUN': 'no label', 'COD_PROV': 'no label', 'SHAPE_Leng': 'no label', 'MUN_TIOC': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_GAIOCSantaCruz_31.set('fieldLabels', {'OBJECTID': 'no label', 'C_UT': 'no label', 'DEPARTAMEN': 'inline label', 'SEC_PROV': 'no label', 'PROVINCIA': 'inline label', 'MUNICIPIO': 'inline label', 'N°_LEY': 'inline label', 'FECHA_LEY': 'inline label', 'ID_ESTADO': 'inline label', 'ESTADO': 'no label', 'ZONA': 'no label', 'ID_UT': 'no label', 'BL_COMLIT_': 'no label', 'BL_COMLIT1': 'no label', 'BL_COMLI_M': 'no label', 'CAPITAL': 'no label', 'C_SIOT': 'no label', 'OBS_': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Ley_Poligonos_32.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'SUPERF_KM2': 'no label', 'DEPARTAMEN': 'inline label', 'PROVINCIA': 'inline label', 'CAPITAL': 'inline label', 'F_LEY_PROV': 'inline label', 'LEY_MUN': 'inline label', 'F_LEY_MUN': 'inline label', 'COD_MUN': 'inline label', 'COD_PROV': 'inline label', 'SHAPE_Leng': 'no label', 'MUN_TIOC': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_PisoFirmez20s_33.set('fieldLabels', {'OBJECTID': 'no label', 'COD_SIOT': 'no label', 'ID_LIMITE': 'no label', 'ID_TRAMO': 'no label', 'DIST_KM': 'no label', 'FECHA_LEY': 'no label', 'ID_EXP': 'no label', 'LIMITE': 'no label', 'ESTADO': 'no label', 'TIPO_LIMIT': 'no label', 'Z_UTM': 'no label', 'LEY': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Ley_Tramos_WGS84_Z20s_34.set('fieldLabels', {'OBJECTID': 'no label', 'ID_LIMITE': 'no label', 'ID_TRAMO': 'no label', 'DIST_KM': 'no label', 'ESTADO': 'no label', 'Z_UTM': 'no label', 'N_LEY': 'no label', 'FECHA_LEY': 'no label', 'ID_ARCHIVO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Le_1': 'no label', 'SHAPE_Le_2': 'no label', });
lyr_Ley_Tramos_WGS84_Z20s_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});