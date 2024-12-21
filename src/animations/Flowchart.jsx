import React from "react";

const TreeStructure = () => {
  const data = [
    {
      id: 1,
      title: "Root Node",
      children: [
        {
          id: 2,
          title: "Child Node 1",
          children: [
            { id: 4, title: "Subchild Node 1" },
            { id: 5, title: "Subchild Node 2" },
          ],
        },
        {
          id: 3,
          title: "Child Node 2",
          children: [],
        },
      ],
    },
  ];

  const renderTree = (node, isRoot = false) => (
    <div className="flex flex-col items-center" key={node.id}>
      {/* Node Block */}
      <div
        className={`relative bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md ${
          isRoot ? "mb-6" : "mt-4"
        }`}
      >
        {node.title}
        {!isRoot && (
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 h-4 w-0.5 bg-gray-500" />
        )}
      </div>

      {/* Lines and Children */}
      {node.children && node.children.length > 0 && (
        <div className="flex justify-center items-start mt-4">
          <div className="flex space-x-8">
            {node.children.map((child) => (
              <div className="relative" key={child.id}>
                {/* Line Connecting to Children */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-0.5 bg-gray-500" />
                {renderTree(child)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {data.map((node) => renderTree(node, true))}
    </div>
  );
};

export default TreeStructure;
