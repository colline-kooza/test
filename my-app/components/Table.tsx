"use client"
import { getExpenses } from "@/actions/expenses"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Tabs } from "./ui/tabs"
import { getIncome } from "@/actions/transitions"
import { useState } from "react"
import Income from "./Income"
import Expense from "./Expense"


export default function Table({income , expense}:any) {
const [active , setActive]=useState("income")
// console.log(active)
  return (
    <div className="min-h-screen w-full bg-slate-900 flex justify-center items-start pt-10 text-white mt-5">
      <div className=" rounded-lg shadow-lg p-6  w-full">
        <Tabs>
          <div className="flex justify-between mb-6">
           
            <Button onClick={()=>setActive("income")} className="text-sm bg-gray-600 font-bold" variant="ghost">
              INCOME
            </Button>
            <Button onClick={()=>setActive("expense")} className="text-sm font-bold  bg-gray-600" variant="ghost">
              EXPENSES
            </Button>
          
          </div>
        </Tabs>
       {
        active === "income" ? (
          <Income income={income }/>
        ):(
          <Expense expense={expense}/>
        )
       }
      </div>
    </div>
  )
}

// function BarChart(props:any) {
//   return (
//     <div {...props}>
//       <ResponsiveBar
//         data={[
//           { name: "Jan", count: 111 },
//           { name: "Feb", count: 157 },
//           { name: "Mar", count: 129 },
//           { name: "Apr", count: 150 },
//           { name: "May", count: 119 },
//           { name: "Jun", count: 72 },
//         ]}
//         keys={["count"]}
//         indexBy="name"
//         margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
//         padding={0.3}
//         colors={["#2563eb"]}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 4,
//           tickPadding: 16,
//         }}
//         gridYValues={4}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         tooltipLabel={({ id }:any) => `${id}`}
//         enableLabel={false}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   )
// }
