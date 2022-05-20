import PathFinder from 'geojson-path-finder';
import geo from '../data/geo';

const buildRoute = (startText, finishText) => {
  const start = geo.features.find((f) => f.properties.Sys == startText);
  const finish = geo.features.find((f) => f.properties.Sys == finishText);

  const pathFinder = new PathFinder(geo);
  return pathFinder.findPath(start, finish);
};

export default buildRoute;
