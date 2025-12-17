import type { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    text: string;
    startIcon? : ReactElement;
    endIcon?: any;
    onClick?: () => void;
    fullWidth?: boolean
    loading? : boolean
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-black-600"
}

const sizeStyles = {
    "sm": "p-2",
    "md": "p-4",
    "lg": "px-6 py-3",
}

const defaultStyles = "px-4 py-2 rounded-md font-normal cursor-pointer flex items-center"
export const Button = (props: ButtonProps) => {

    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${props.fullWidth ? "w-full flex justify-center" : ""} ${defaultStyles} ${props.loading ? "opacity-45": ""}`} disabled={props.loading} > <div className="pr-2">{props.startIcon}</div>{props.text} </button>

}

