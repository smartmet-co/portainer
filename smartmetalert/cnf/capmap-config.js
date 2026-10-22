var alertOptions = {
    subDirectories: false,  //'meteorology,hydrology' etc.
    useLocation: false,
    defaultLanguage: 'en-CO',
    dateFormat: 'long', // 'vs. ISOString'
    dateFormatString: 'DD/MM/YYYY, HH:MM', // https://momentjs.com/docs/#/displaying/format/
    mapTileSource: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // https://leaflet-extras.github.io/leaflet-providers/preview/
    zoom: 7,
    center: [4.57, -74.29],
    bounds: {north: 12, east: -65, south: -5, west: -80},
    attribution: 'Finnish Meteorological Institute',
    polygonOptions: {
        fillOpacity: 1,
        strokeOpacity: 1,
        strokeWeight: 3,
          preventSymbolOverlapping: true,
    displayActiveFor: true,
    },
    dayControl: true,
    day0Control: true,
    day1Control: true,
    day2Control: true,
    day3Control: false,
    day4Control: false,
    allDayControl: true,
    extendedDayControl: true,
    dayDateFormat: 'DD/MM',
    popUpMaxHeight: false, // maximum height in px
    refresh: 300, // Refresh interval seconds
    areaLimitForMarkers: 0.005,
    iconWidth: 54,
    iconHeight: 54,
    transparentIcons: false,
    customIcons: true,
    showUpdateTime: true,
    showIconLegend: true,
    customLocations: false,
    numberIcons: false,
    timeZone: 'America/Bogota',
    hideOffset: true,
    eventTypes: {
        // edit: "edit capmap-config.js",
        "rain": "Rainfall land",
        "weather warning": "Rainfall sea",
        "wind": "Wind and wave",
        "high tide": "High tide",
        "disturbance": "Disturbance",
        "tropical depression": "Tropical depression",
        "tropical storm": "Tropical storm",
        "hurricane": "Hurricane",
        "post-tropical cyclone": "Post-tropical cyclone",
        "landslide": "Landslides",
        "forest fire": "Forest fire",
        "temperature": "Temperature",
        "river level": "River level",
        "flood": "Flood",
    }
};
