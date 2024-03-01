import MainImage from "./MainImage";
import Text from "./Text";
import image from "../assets/images/no-back-ground.png";
import "../App.css";;

const DescriptionCard = () => {
  const khmerText =
    "នេះគឺ​ជា គេហទំព័រដែលនាងខ្ញំុបង្កើតឡើងក្នុងគោលបំណង ជួយ​ផ្សព្វផ្សាយនូវផលិតផលក្នុងស្រុក លក់ និង ទិញ​ ផលិតផលក្នុងស្រុក មិនថា ជាផលិតផលកសិកម្ព ឧស្សាហកម្ម សិប្បកម្មជាដើម។​ នាងខ្ញំុទទួលទាំងលក់ និង ទទួលទិញបន្តពីបងប្អូនទាំងអស់គ្នា ដោយតម្លៃសមរម្យមួយ។ ខ្ញំុសង្ឃឹមថា គេហទំព័រនេះអាចជួយដល់បងប្អូនប្រជាកសិករយើងកាន់តែមានទីផ្សារធំទូលាយ។ ";
  const englishText =
    "This is my a website that I created to introduce product in Cambodia by Sell and Buy faming Product, Diligent Product, Hand Making Product. I will sell and also by from all of you in the fit price. I hope that this website could help all farmer to have the large marketing.";
  return (
    <div className="card-description">
      <div>
        <div className="main-text">
          <div className="title">
            <h3>
              ទិញ និង លក់ <span className="en-title">(Buy and Sell)</span>
            </h3>
          </div>
          <Text englishText={englishText} khmerText={khmerText}></Text>
        </div>
      </div>
      <div className="main-image">
        <MainImage image={image} />
      </div>
    </div>
  );
};

export default DescriptionCard;
