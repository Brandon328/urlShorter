import PropTypes from "prop-types";

function Card({ src, title, description, className = "" }) {
  return (
    <div
      className={
        "bg-white-0 rounded-md px-9 pb-10 text-center z-10 relative" +
        " " +
        className
      }
    >
      <picture className="relative bg-primary-darkviolet p-5 rounded-full top-0 -translate-y-1/2 inline-block m-auto">
        <img src={src} alt="image" />
      </picture>
      <h3 className="text-xl font-bold -translate-y-5">{title}</h3>
      <p className="text-neutral-grayishviolet">{description}</p>
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
