import "../App.css";

const MainImage = ({ image }: { image: string }) => {
  return (
    <div className="main-image">
      <img src={image} alt="pic" />
    </div>
  );
};

export default MainImage;
