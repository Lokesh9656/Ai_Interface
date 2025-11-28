export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-100 dark:bg-gray-800 border-r p-4">
      <h2 className="font-bold mb-4">Chat History</h2>

      <div className="space-y-2">
        <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded">Chat 1</div>
        <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded">Chat 2</div>
      </div>
    </div>
  );
}
