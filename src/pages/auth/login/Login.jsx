import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as yup from "yup";
import { TailSpin } from "react-loader-spinner";
import { twMerge } from "tailwind-merge";

const loginValidationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const Login = ({ showLoginModal, toogleLoginModal }) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <motion.div
      animate={showLoginModal ? { y: 0, x: 0, display: "flex" } : {}}
      initial={{ y: 700 }}
      transition={{ duration: 1 }}
      className="z-50 fixed top-0 left-0  right-0 bottom-0 bg-black/60 hidden"
    >
      <div className="w-full h-full flex items-center">
        <div className="w-[470px] mx-auto bg-[#1a2c38] px-3 py-3 rounded-md">
          <div className="flex items-center pb-3">
            <h4 className="flex-1 text-center capitalize">sign in</h4>
            <button
              className="font-bold text-red-500"
              onClick={toogleLoginModal}
            >
              <RxCross1 size={18} />
            </button>
          </div>
          <form action="" className="flex flex-col gap-4">
            <div>
              <h4 className="capitalize text-sm pb-1 tracking-wide text-gray-300">
                <span>email</span>
                <span className="ml-1 text-red-500">*</span>
              </h4>
              <input
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                name="email"
                id="email"
                type="text"
                placeholder="e.g. brian@gmail.com"
              />
              {touched.email && errors.email && (
                <div className="pl-1">
                  <span className="text-[12px] text-red-600">
                    {errors.email}
                  </span>
                </div>
              )}
            </div>
            <div>
              <h4 className="capitalize text-sm pb-1 tracking-wide text-gray-300">
                <span>password</span>
                <span className="ml-1 text-red-500">*</span>
              </h4>
              <input
                onChange={handleChange}
                values={values.password}
                onBlur={handleBlur} //shows touched fields
                name="password"
                id="password"
                type="password"
              />
              {touched.password && errors.password && (
                <div className="pl-1">
                  <span className="text-[12px] text-red-600">
                    {errors.password}
                  </span>
                </div>
              )}
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={twMerge(
                "bg-[#1fff1fc5] py-3 mt-1 text-black text-sm capitalize font-medium rounded-md",
                isSubmitting && "bg-slate-700",
                isSubmitting && "cursor-not-allowed"
              )}
            >
              {isSubmitting ? (
                <div className="flex justify-center">
                  <TailSpin
                    visible={true}
                    height="25"
                    width="25"
                    color="red"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                "sign in"
              )}
            </button>
          </form>
          <div>
            <p className="text-[14px] pt-6  pb-4 flex justify-center gap-1  ">
              <span className="text-gray-400">Don't have an account?</span>
              <span className="font-medium">
                <a>Register here</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
