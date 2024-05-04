import { useState } from 'react';

const AddTocart = () => {
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleChange} className="btn btn-primary">
        Add to cart
      </button>
      <p>{count}</p>
    </>
  );
};

export default AddTocart;
