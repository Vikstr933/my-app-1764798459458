export function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-start max-w-[70%]">
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 mr-2">
          <span className="text-white text-sm font-semibold">AI</span>
        </div>
        <div className="px-4 py-3 rounded-lg bg-gray-100">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}