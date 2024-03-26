import { getExpenses } from "@/actions/expenses"
import { getIncome } from "@/actions/transitions"

export default async function HeoTotal() {
  const expenses:any = await  getExpenses()
  const income:any = await  getIncome()

        const totalExpenses = expenses.reduce((acc: number, exp: any) => acc + Number(exp.amount), 0);
        const totalIncome = income.reduce((acc: number, inc: any) => acc + Number(inc.amount), 0);
        const balance = totalIncome - totalExpenses;


  return (
    <div className="bg-[#4F46E5] rounded-lg p-4 flex items-center justify-between text-white w-full h-[200px]">
      <div>
        <div className="text-xl mb-1 text-gray-200">Total Balance</div>
        <div className="text-3xl  font-semibold">₹ {balance}</div>
      </div>
      <div className="flex flex-col items-center space-x-2">
        <img src="/pie.jpg" alt="" className="w-[100px] h-[100px] object-cover rounded-[10px]"/>
        <div className="mt-4 flex flex-col items-center">
          <div className="text-lg font-semibold">40%</div>
          <div className="text-sm tracking-wider font-bold">Savings</div>
        </div>
      </div>
    </div>
  )
}

