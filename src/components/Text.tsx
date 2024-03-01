import "../App.css";

export interface IText {
  englishText: string;
  khmerText: string;
}

const Text = ({ khmerText, englishText }: IText) => {
  return (
    <div>
      <div className="kh-text">{khmerText}</div>
      <div className="en-text">{englishText}</div>
    </div>
  );
};

export default Text;
