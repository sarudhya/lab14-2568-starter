import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password: "",
  cfPass: "",
  total: 0,
  haveCoupon: false,
  couponCode: "",
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  setPassword: (_password) => 
    set(() => ({
      password: _password,
    })),
  setcfPass: (_cfPass) =>
    set(() => ({
      cfPass: _cfPass,
    })),
  sethaveCoupon: (_haveCoupon) =>
    set(() => ({
      haveCoupon: _haveCoupon,
    })),
  setcouponCode: (_couponCode) =>
    set(() => ({
      couponCode: _couponCode,
    })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCupon: () =>
    set((state) => {
      let totalPayment = 0;
      if(state.haveCoupon){
        if(state.couponCode === "CMU2025"){
          let itemTotal = 0;
          if (state.plan === "funrun") itemTotal += 500;
          if (state.plan === "mini") itemTotal += 800;
          if (state.plan === "half") itemTotal += 1200;
          if (state.plan === "full") itemTotal += 1500;
          const discount = itemTotal * 0.3;
          totalPayment += itemTotal - discount;
        }else{
          if (state.plan === "funrun") totalPayment += 500;
          if (state.plan === "mini") totalPayment += 800;
          if (state.plan === "half") totalPayment += 1200;
          if (state.plan === "full") totalPayment += 1500;
        }
      }else{
        if (state.plan === "funrun") totalPayment += 500;
        if (state.plan === "mini") totalPayment += 800;
        if (state.plan === "half") totalPayment += 1200;
        if (state.plan === "full") totalPayment += 1500;
      }
      return { total: totalPayment };
    }),

  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      password: "",
      cfPass: "",
      total: 0,
      haveCoupon: false,
      couponCode: "",
    }),
}));
