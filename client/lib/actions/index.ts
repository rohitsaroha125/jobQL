"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { API_URL } from "../config";
import axios from "axios";

export async function noCachePage() {
  revalidatePath("/");
  redirect("/");
}
