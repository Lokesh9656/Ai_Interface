export default function TopBar() {
  return (
    <div className="p-4 border-b flex justify-between items-center bg-white dark:bg-gray-900">
      <select className="p-2 border rounded">
        <option>GPT-3.5</option>
        <option>GPT-4</option>
      </select>

      <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
        Toggle Theme
      </button>
    </div>
  );
}
