function init() {
  const multiRoute = new window.ymaps.multiRouter.MultiRoute({
    referencePoints: [],
    params: {
      routingMode: 'pedestrian',
    },
  }, {
    boundsAutoApply: true,
    editorMidPointsType: 'via',
    editorDrawOver: false,
  });

  multiRoute.options.set({
    wayPointStartIconFillColor: 'black',
    wayPoint: 'white',
    wayPointFinishIconFillColor: 'black',
    color: 'white',
  });

  const buttonEditor = new window.ymaps.control.Button({
    data: { content: 'Режим редактирования' },
  });

  buttonEditor.events.add('select', () => {
    multiRoute.editor.start({
      addWayPoints: true,
      removeWayPoints: true,
    });
  });

  buttonEditor.events.add('deselect', () => {
    multiRoute.editor.stop();
  });

  const myMap = new window.ymaps.Map('mapID', {
    center: [55.749, 37.524],
    zoom: 5,
    controls: [buttonEditor, 'zoomControl', 'searchControl', 'fullscreenControl'],
  }, {
    buttonMaxWidth: 300,
    searchCOntrolProvider: 'yandex#search',
  });

  const { geolocation } = window.ymaps;

  geolocation.get({
    provider: 'yandex',
    mapStateAutoApply: true,
  }).then((result) => {
    result.geoObjects.options.set('preset', 'islands#redCircleIcon');
    result.geoObjects.get(0).properties.set({
      balloonContentBody: 'Мое местоположение',
    });
    myMap.geoObjects.add(result.geoObjects);
  });

  geolocation.get({
    provider: 'browser',
    mapStateAutoApply: true,
  }).then((result) => {
    result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
    myMap.geoObjects.add(result.geoObjects);

    myMap.geoObjects.add(multiRoute);
  });
}

window.ymaps.ready(init);
