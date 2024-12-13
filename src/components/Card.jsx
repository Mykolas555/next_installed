// components/Card.js

const Card = () => {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img
          className="w-full h-48 object-cover"
          src="https://via.placeholder.com/300x200"
          alt="Card Image"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">Card Title</h1>
          <p className="text-gray-700 mb-4">
            This is a simple card component built with Tailwind CSS. It includes an image, title, description, and button.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    );
  };
  
  export default Card;
  