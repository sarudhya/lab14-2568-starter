import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  password: string;
  cfPass: string;
  total: number;
  coupon: boolean;
  code: string;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  setcfPass: (v: string) => void;
  setCoupon: (v: boolean) => void;
  setCode: (v: string) => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCupon: () => void;
  reset: () => void;
}
export type { MarathonFormState }