import PropTypes from "prop-types";

function GetStartedBtn({ className = "" }) {
  return (
    <button
      className={`
        bg-primary-cyan text-white-50 px-8 py-3
        rounded-full font-bold tracking-wider ${className}`}
    >
      Get Started
    </button>
  );
}
GetStartedBtn.propTypes = {
  className: PropTypes.string,
};

export default GetStartedBtn;
