import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const itemId = parseInt(id, 10);

  // Use same 5000 items array
  const items = Array.from({ length: 5000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is the detailed description for item ${i + 1}.`,
  }));

  const item = items.find((item) => item.id === itemId);

  if (!item)
    return <p className="p-8 text-center text-red-500">Item not found.</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">{item.name}</h1>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Description:</span> {item.description}
        </p>
        <p className="text-gray-500">
          <span className="font-semibold">Item ID:</span> {item.id}
        </p>
      </div>
    </div>
  );
}

export default Details;
