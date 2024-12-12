// import { useRouter } from "next/router";
// import Image from "next/image";
// import Link from "next/link";

// const Cart = () => {
//   const router = useRouter();
//   const { product, image } = router.query; // Extract 'product' and 'image' query parameters

//   return (
//     <div className="cart-container w-full py-12 px-8">
//       {/* Header */}
//       <h2 className="text-center font-bold text-2xl mb-8">Your Cart</h2>

//       {/* Display selected product */}
//       <div className="text-center">
//         {product && image ? (
//           <div className="cart-item">
//             {/* Display Product Image */}
//             <div className="mb-4">
//               <Image
//                 src={"image/Rectangle 1.png"} // Ensure the image is treated as a string
//                 alt={product as string}
//                 width={200}
//                 height={200}
//                 className="mx-auto"
//               />
//             </div>
//             {/* Display Product Name */}
//             <h3 className="font-semibold text-lg">{product}</h3>
//             <p className="text-gray-600 text-sm mt-2">This is the product you added to the cart.</p>
//           </div>
//         ) : (
//           <p className="text-gray-600 text-sm mt-2">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Checkout Button */}
//       <div className="text-center mt-8">
//         <button className="text-[#B88E2F] px-6 py-3 border-2 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white transition">
//           Checkout
//         </button>
//       </div>

//       {/* Back to Products */}
//       <div className="text-center mt-4">
//         <Link href="/">
//           <a className="text-[#B88E2F] px-6 py-3 border-2 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white transition">
//             Back to Products
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  const router = useRouter();
  const { product, image } = router.query;

  return (
    <div className="cart-container w-full py-12 px-8">
      <h2 className="text-center font-bold text-2xl mb-8">Your Cart</h2>

      {product && image ? (
        <div className="cart-item text-center">
          <div className="mb-4">
            <Image
              src={image}
              alt={product}
              width={200}
              height={200}
              className="mx-auto rounded-md"
            />
          </div>
          <h3 className="font-semibold text-lg">{product}</h3>
          <p className="text-gray-600 text-sm mt-2">This is the product you added to the cart.</p>
        </div>
      ) : (
        <p className="text-gray-600 text-sm mt-2">Your cart is empty.</p>
      )}

      <div className="text-center mt-8">
        <button className="text-white bg-[#B88E2F] px-6 py-3 rounded-md hover:bg-[#966F2A] transition">
          Checkout
        </button>
      </div>

      <div className="text-center mt-4">
        <Link href="/">
          <a className="text-[#B88E2F] px-6 py-3 border-2 border-[#B88E2F] rounded-md hover:bg-[#B88E2F] hover:text-white transition">
            Back to Products
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

