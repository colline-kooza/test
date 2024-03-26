"use server"

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

export async function ExpenseData(data:any){
    console.log(data)
    try {
      const newProject = await prisma.expenses.create({
        data
      }) 
      revalidatePath("/") 
    //   console.log(newProject)
    } catch (error) {
       console.log(error) 
    }
}
export async function getExpenses(){
    try {
      const projects = await prisma.expenses.findMany()  
      return projects
    } catch (error) {
       console.log(error) 
    }
}