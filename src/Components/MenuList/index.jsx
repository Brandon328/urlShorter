import PropTypes from "prop-types";

function MenuList({ title, items, className = "" }) {
  return (
    <div className={"my-12 lg:text-start lg:my-0" + " " + className}>
      <h3 className="mb-5">{title}</h3>
      <div
        className="flex flex-col text-neutral-grayishviolet 
      space-y-3"
      >
        {items.map((item, index) => (
          <p key={index}>
            <a href={item.url}>{item.title}</a>
          </p>
        ))}
      </div>
    </div>
  );
}
MenuList.protoTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default MenuList;
