import { getExpenses } from "@/actions/expenses"
import { getIncome } from "@/actions/transitions"

export default function Hero() {

  return (
    <div className="flex items-center justify-between space-x-4  text-white p-6 ">
      <div className="flex gap-3 items-center ">
      <img alt="Nirmal Kumar" src="/profile.avif" className="w-[100px] h-[100px] object-contain rounded-[50%]"/>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-200">Hello !</span>
        <span className="text-xl  font-bold tracking-wider">Nirmal Kumar</span>
      </div>
      </div>
      <div className="flex items-center space-x-2">
        <BellIcon className="h-6 w-6 text-gray-400" />
        <MicroscopeIcon className="h-6 w-6 text-gray-400" />
      </div>
    </div>
  )
}

function BellIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function MicroscopeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}
