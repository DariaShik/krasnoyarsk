import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new TileLayer({
      source: new TileWMS({
        url: 'http://127.0.0.1:8080/geoserver/student/wms',
        params: {'LAYERS': 'student:border', 'TILED': true},
        serverType: 'geoserver',
        // Countries have transparency, so do not fade tiles:
        transition: 0,
    }),
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://127.0.0.1:8080/geoserver/student/wms',
      params: {'LAYERS': 'student:highway_primary', 'TILED': true, 'STYLES':'student:oranje-line'},
      serverType: 'geoserver',
      // Countries have transparency, so do not fade tiles:
      transition: 0,
  }),
}),
  ],
  view: new View({
    center: [10340785, 7560243],
    zoom: 11
  })
});