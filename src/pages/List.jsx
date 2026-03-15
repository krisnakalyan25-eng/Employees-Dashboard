import { useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  // 1️⃣ Scroll position
  const [scrollTop, setScrollTop] = useState(0);
  const navigate = useNavigate();
  // 2️⃣ Virtualization constants
  const ROW_HEIGHT = 180; // height of each row
  const COLUMNS = 4; // grid columns
  const VISIBLE_ROWS = 6; // rows to render (buffer included)

  // 3️⃣ Generate mock items
  const items = Array.from({ length: 5000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is item number ${i + 1}`,
  }));

  // 4️⃣ Scroll handler
  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  // 5️⃣ Calculate virtualization values
  const startRow = Math.floor(scrollTop / ROW_HEIGHT);
  const startIndex = startRow * COLUMNS;
  const endIndex = startIndex + VISIBLE_ROWS * COLUMNS;

  // Slice visible items
  const visibleItems = items.slice(startIndex, endIndex);

  // 6️⃣ Fake full height & offset
  const totalRows = Math.ceil(items.length / COLUMNS);
  const totalHeight = totalRows * ROW_HEIGHT;
  const offsetY = startRow * ROW_HEIGHT;

  return (
    <div className="h-screen overflow-auto p-4" onScroll={handleScroll}>
      {/* 7️⃣ Fake spacer for scrollbar */}
      <div style={{ height: `${totalHeight}px`, position: "relative" }}>
        {/* 8️⃣ Visible items container positioned correctly */}
        <div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: "absolute",
            width: "100%",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 border rounded shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
