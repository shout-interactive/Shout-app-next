import "./index.module.css";

const Title = ({ title }) => {
  return (
    <div className="title-wrapper">
      <h4 className="title">{title}</h4>
    </div>
  );
};

export default Title;
