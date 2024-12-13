import Image from "next/image";
import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "/image/sofa.jpg",
    },
  ]);

  // Handle quantity change
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page container mx-auto p-4 md:p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Cart</h1>
        <p className="text-gray-500">Home &gt; Cart</p>
      </div>

      {/* Cart Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product List */}
        <div className="col-span-2 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4 flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="p-4">Rs. {item.price.toLocaleString()}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-16 border border-gray-300 text-center"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                    />
                  </td>
                  <td className="p-4">
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td className="p-4">
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="bg-gray-100 p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between border-b pb-2 mb-2">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-4">
            <span>Total</span>
            <span className="font-bold text-xl">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
            Check Out
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">High Quality</span>
          <p className="text-gray-500">Crafted from top materials</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">Warranty Protection</span>
          <p className="text-gray-500">Over 2 years</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">Free Shipping</span>
          <p className="text-gray-500">Order over Rs. 150</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">24 / 7 Support</span>
          <p className="text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
