const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-5 py-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center">
          <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
        </div>

        <div>
          <h4 className="text-lg font-semibold text-slate-800">{item.name}</h4>
          <p className="text-slate-500 text-sm">${item.price}</p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveFromCart(item.id)}
        className="text-pink-500 font-medium text-sm hover:text-pink-600 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;