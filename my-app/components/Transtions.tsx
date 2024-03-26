"use client"
import Link from "next/link"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { IncomeData } from "@/actions/transitions"
import { Toast } from "./ui/toast"
import { toast } from "./ui/use-toast"
import { useState } from "react"
import { ExpenseData } from "@/actions/expenses"

type Inputs = {
  amount: string
  name: string
  date:string
  description:string
}

export default function Transtions() {
const [loading , setLoading]=useState(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const router=useRouter()


  async function onSubmit(data:any){
    console.log(data)

    setLoading(true)
    try {
      await IncomeData(data) 
        router.push("/")
        toast({
          title: "Successfully Added",
          description: "Added sucessfully Thank you ",
        })
        setLoading(false)
        reset()
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
 
}
   async function onSubmitExpenses(data:any){
  // console.log(data)
  setLoading(true)
  try {
    await ExpenseData(data) 
      router.push("/")
      toast({
        title: "Successfully Added",
        description: "Added sucessfully Thank you ",
      })
      setLoading(false)
      reset()
  } catch (error) {
      console.log(error)
      setLoading(false)
  }

}
    return (
      <div className="flex space-x-4 mt-4 w-[1005]">
        <div className="flex items-center justify-between px-4 py-2 rounded-md bg-[#d1d5db] w-1/2 h-[120px]">
          <div>
            <div className="text-sm font-medium text-gray-700">Income</div>
            <div className="text-xl font-semibold text-gray-900">₹ 50,000</div>
          </div>
      
       <Dialog>
  <DialogTrigger> <PlusIcon className="hover:text-gray-700" /></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Income?</DialogTitle>
      <DialogDescription>
      <div className=" p-4 rounded-lg max-w-sm mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input {...register("amount")} placeholder="Amount" type="number" />
        <Input {...register("name")} placeholder="Income Name" type="text" />
        <Select>
          <SelectTrigger id="category">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="transportation">Transportation</SelectItem>
            <SelectItem value="housing">Housing</SelectItem>
            <SelectItem value="utilities">Utilities</SelectItem>
            <SelectItem value="insurance">Insurance</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Input {...register("date")} placeholder="Date" type="date" />
        <Textarea {...register("description")} placeholder="Description" />
        <Button type="submit" className=" text-white">
          {
            loading ?"Adding....." : "Add Income"
          }
        </Button>
      </form>
    </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </div>
        <div className="flex items-center justify-between px-4 py-2 rounded-md bg-[#f3e2d9] w-1/2  h-[120px]">
          <div>
            <div className="text-sm font-medium text-gray-700">Expense</div>
            <div className="text-xl font-semibold text-gray-900">₹ 20,000</div>
          </div>
          <Dialog>
  <DialogTrigger> <PlusIcon className="hover:text-gray-700" /></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Expense</DialogTitle>
      <DialogDescription>
      <div className=" p-4 rounded-lg max-w-sm mx-auto">
      <form onSubmit={handleSubmit(onSubmitExpenses)} className="flex flex-col gap-4">
        <Input {...register("amount")} placeholder="Amount" type="number" />
        <Input {...register("name")} placeholder="Expense Name" type="text" />
        <Select>
          <SelectTrigger id="category">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="transportation">Transportation</SelectItem>
            <SelectItem value="housing">Housing</SelectItem>
            <SelectItem value="utilities">Utilities</SelectItem>
            <SelectItem value="insurance">Insurance</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Input {...register("date")} placeholder="Date" type="date" />
        <Textarea {...register("description")} placeholder="Description" />
        <Button type="submit" className=" text-white">
          {
            loading ?"Adding....." : "Add Expense"
          }
        </Button>
      </form>
    </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        </div>
      </div>
    )
  }
  
  function PlusIcon(props:any) {
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
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }
  