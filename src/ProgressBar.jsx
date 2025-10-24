const ProgressBar = ({ width }) => {
  const percent = `${width}%`;
  return (
    <div className="container">
      <div className="innerContainer" style={{ width: percent }}>
        {percent}
      </div>
    </div>
  );
};
export default ProgressBar;
