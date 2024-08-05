import PropTypes from 'prop-types';

const Item = ({img, amount, handleSubmit}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={img} alt="" className="h-60 w-60 rounded-lg"/>
      <h2 className="text-xl font-semibold">{amount} RS</h2>
      <button onClick={() => handleSubmit(amount)} className="bg-red-400 px-4 py-2 text-white text-lg font-semibold rounded-lg">Buy now</button>
    </div>
  )
}

export default Item;

Item.propTypes = {
    img: PropTypes.node.isRequired,
    amount: PropTypes.node.isRequired,
    handleSubmit: PropTypes.node.isRequired
};
