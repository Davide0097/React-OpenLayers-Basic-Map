Technologies used in this app

In my app, I utilized the following technologies:
- React: A popular JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript.
- Vite: A fast build tool and development server.


Run the app locally - Prerequisites and installation

Before getting started with the app, you'll need to have Node.js and npm installed on your machine.

To install and run the app, follow these simple steps:
- Clone the repository.
- Install dependencies by running npm install in the project directory.
- Start the development server by running npm run dev in the project directory.


Using Map from OpenLayers API.
Using View from OpenLayers API.
Using TileLayer from OpenLayers API.
Using OSM as a Layer source.
Using Map from OpenLayers API:

The map is the core component of OpenLayers. A view, one or more layers, and a 
target container are needed to render the map.

Using View from OpenLayers API:

A View object represents a simple 2D view of the map. 
This is the object to act upon to change the center, resolution, and rotation of the map.
A View has a projection. The projection determines the coordinate system of the center, 
and its units determine the units of the resolution (projection units per pixel).
The default projection is Web Mercator (EPSG:3857).

A View is determined by three states: center, resolution, and rotation. Each state has 
a corresponding getter and setter, e.g. getCenter and setCenter for the center state.

Using TileLayer from OpenLayers API:

For layer sources that provide pre-rendered, tiled images in grids that are organized 
by zoom levels for specific resolutions. Note that any property set in the options is 
set as a BaseObject property on the layer object; for example, setting title: 'My Title' 
in the options means that title is observable, and has get/set accessors.

Using OSM as a Layer source:

OSM stands for OpenStreetMap. It is a collaborative online map that is built by a community 
of contributors from around the world. OpenStreetMap is a free and open-source project that 
allows users to contribute, edit, and use geographical data to create maps. It provides a 
wide range of map data including roads, buildings, points of interest, and more, which can 
be used in various applications, including web mapping, navigation, and geolocation services. 
OpenStreetMap is widely used by developers and map enthusiasts due to its open nature and availability 
of extensive map data. In the code provided, new OSM() is used as the data source for a TileLayer 
in the OpenLayers library, which is a popular JavaScript library for building interactive web maps.
