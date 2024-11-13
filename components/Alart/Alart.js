"use Client";
import { toast } from "react-toastify";

export const Alart = (msg) => {
  toast.success(`${msg}`);
};
