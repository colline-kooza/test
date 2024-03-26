"use server"

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

export async function IncomeData(data:any){
    // console.log(data)
    try {
      const newProject = await prisma.income.create({
        data
      }) 
      revalidatePath("/") 
    //   console.log(newProject)
    } catch (error) {
       console.log(error) 
    }
}
export async function getIncome(){
    try {
      const projects = await prisma.income.findMany()  
      return projects
    } catch (error) {
       console.log(error) 
    }
}