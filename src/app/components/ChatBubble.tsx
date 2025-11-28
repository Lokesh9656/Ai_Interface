export default function ChatBubble({ text, type }: { text: string; type: "user" | "ai" }) {
  return (
    <div className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-xs ${
          type === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
