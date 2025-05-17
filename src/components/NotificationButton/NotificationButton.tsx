import {} from 'react'

export default function NotificationButton() {
  return (
    <button className='fixed bottom-4 right-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zm6-6V8a6 6 0 00-12 0v8l-2 2h16l-2-2z"
            />
        </svg>
    </button>
  )
}
