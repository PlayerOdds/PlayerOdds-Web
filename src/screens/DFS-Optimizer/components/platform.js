const Platform = ({ platforms }) => {
  return (
    <div className="grid grid-cols-4 gap-1 mt-2">
      {platforms.map((platform, index) => (
        <div key={index} className="bg-gray-700 px-2 py-1 rounded flex justify-between items-center">
          <span className="text-xs font-semibold">{platform.platform}</span>
          <span className="text-xs">{platform.line}</span>
          <span className="text-xs">{platform.odds}</span>
        </div>
      ))}
    </div>
  );
};

export default Platform;
