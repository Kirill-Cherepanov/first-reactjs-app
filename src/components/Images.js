// '../images' is a path to all the images
// I wanted to put it into a variable
// but require.context vars have to be statically analyzable
// which means that it's difficult/impossible to put it in a variable
const images = importAll(
  require.context('../images', false, /\.(png|jpe?g|svg)$/)
);

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => (images[item.replace('./', '')] = r(item)));
  return images;
}

export default images;
