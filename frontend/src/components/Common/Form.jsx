import React from "react";
import { NavLink } from "react-router";

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisable,
  isLogin
}) => {

  const renderInput = (getControlItem) => {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <div className="relative">
            <input
              name={getControlItem.name}
              id={getControlItem.name}
              type={getControlItem.type}
              value={value}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value,
                })
              }
              className="bg-[#FCFCFC] rounded-md border-[0.75px] border-[#f3f3f3] h-10 w-full pr-10 pl-3"
              placeholder={getControlItem.placeholder || ""}
            />
            {/* Icon on the right */}
            {getControlItem.icon && (
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                <img src={getControlItem.icon}></img>
              </span>
            )}
          </div>
        );
        break;

      default:
        element = (
          <input
            className="bg-[#FCFCFC] rounded-md border-[0.75px] border-[#f3f3f3] h-10 w-full pr-10 pl-3"
            name={getControlItem.name}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4">
          {formControls.map((controlItem, index) => {
            if (controlItem.name === "first_name" || controlItem.name === "last_name") {
              if (index === 0) {
                return (
                  <div className="grid grid-cols-2 gap-4" key={controlItem.name}>
                    {formControls
                      .slice(0, 2)
                      .map((control) => (
                        <div className="w-full" key={control.name}>
                          <label className="mb-3 text-white text-base font-normal">
                            {control.label}
                          </label>
                          {renderInput(control)}
                        </div>
                      ))}
                  </div>
                );
              }
            } else {
              return (
                <div className="w-full gap-1.5" key={controlItem.name}>
                  <label className="my-3 text-white text-base font-normal leading-5">
                    {controlItem.label}
                  </label>
                  {renderInput(controlItem)}
                </div>
              );
            }
            return null;
          })}
        </div>
        {
        !isLogin && 
        <div className="flex my-3 ">
            <input type="checkbox" className="mr-5"/>
           <label className="text-white">I agree to the <strong className="">Terms and Conditions</strong> and <strong>Privacy Policy</strong></label>          
        </div>
    }
        <button
          type="submit"
          className={`mt-4  py-2 px-20 mr-4 border-[1.21px] border-white ${isLogin ? 'bg-white text-black':'bg-black text-white'}`}
          disabled={isBtnDisable}
        >
          {buttonText || "Submit"}
        </button>
    {
        !isLogin && 
        <button
        type="button"
        className="mt-4 bg-transparent text-white py-2 px-20 border-[1.21px] border-white"
        disabled={isBtnDisable}
      >
        <NavLink to="/login"> {"Login"}</NavLink>
      </button>
    }
              </form>
    </>
  );
};

export default CommonForm;
