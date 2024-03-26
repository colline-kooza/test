import { getExpenses } from "@/actions/expenses";
import { getIncome } from "@/actions/transitions";
import HeoTotal from "@/components/HeoTotal";
import Hero from "@/components/Hero";
import Table from "@/components/Table";
import Transtions from "@/components/Transtions";
import Image from "next/image";

export default async function Home() {
  const expenses = await  getExpenses()
  const income= await  getIncome()
  return (
  <div>
    <Hero/>
    <HeoTotal/>
    <Transtions/>
    <Table expense={expenses} income={income}/>
  </div>
  );
}
