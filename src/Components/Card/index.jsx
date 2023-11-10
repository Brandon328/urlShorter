import PropTypes from "prop-types";

function Card({ src, title, description, className = "" }) {
  return (
    <div className={className}>
      <img src={src} alt="image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
