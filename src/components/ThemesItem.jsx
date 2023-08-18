
const ThemesItem = ({ color, img, changeColor }) => {
  return <img src={img} alt='icono color' className="theme__img" onClick={() => {
    {changeColor(color)}
  }} />;
}

export default ThemesItem;
