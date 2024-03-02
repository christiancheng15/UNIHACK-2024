import { ChangeEventHandler, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import Button, { BUTTON_TYPES } from "./Button"

interface IInputBox {
    text?: string | null,
    id?: string | null,
    value: any,
    onChange?: ChangeEventHandler<any> | null,
    type: string,
    placeholder?: string | null,
    disabled?: boolean | null,
    helperText?: string | null,
    isError?: boolean | null,
    readOnly?: boolean | null,
    min?: number | null,
    max?: number | null,
    step?: number | null,
    fullWidth?: boolean | null,
    rows?: number | null,
    className?: string | null
}

export default function InputBox({
    text,
    className,
    placeholder,
    id,
    value,
    type,
    onChange,
    disabled,
    helperText,
    isError,
    readOnly,
    min,
    max,
    step,
    fullWidth,
    rows
}: IInputBox) {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)


    function onFocus() {
        setIsFocused(true)
    }

    function onBlur() {
        setIsFocused(false)
    }

    function togglePasswordVisibility(e: React.MouseEvent<HTMLButtonElement>): void {
        e.preventDefault()
        setPasswordVisible(!passwordVisible)
    }

    return (
        <div style={{ width: fullWidth ? "100%" : undefined }} className={`inputContainer_text1 ${1 === 1 && "!flex lg:flex-row flex-col lg:!items-center !items-start gap-2 w-full justify-between"} ${className ? className : ""}`}>
            {
                text && (
                    <label style={type === 'textarea' ? { alignSelf: "start" } : undefined} htmlFor={id ?? undefined}>{text}:</label>
                )
            }

            {
                type === 'password' ? (
                    <div className="w-full lg:basis-[60%] relative">
                        <input
                            readOnly={readOnly ?? undefined}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            disabled={disabled ?? undefined}
                            placeholder={placeholder ?? undefined}
                            value={value}
                            onChange={onChange as ChangeEventHandler<HTMLInputElement> ?? undefined}
                            className={`inputStyle1 w-full ${fullWidth ? "" : "lg:basis-[60%]"}`}
                            type={passwordVisible ? 'text' : 'password'}
                            name={id ?? undefined}
                            id={id ?? undefined}
                            min={min != null ? min as number : undefined}
                            max={max != null ? max as number : undefined}
                            step={step != null ? step as number : undefined}

                        />

                        <Button
                            className={"absolute right-0 top-0 bottom-0 my-auto"}
                            onClick={togglePasswordVisibility}
                            type={BUTTON_TYPES.transparent}
                            element={
                                passwordVisible ? (
                                    <FaEye />
                                ) : (
                                    <FaEyeSlash />
                                )
                            }
                        />

                    </div>

                ) :
                    type !== 'textarea' ? (
                        <input
                            readOnly={readOnly ?? undefined}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            disabled={disabled ?? undefined}
                            placeholder={placeholder ?? undefined}
                            value={value}
                            onChange={onChange as ChangeEventHandler<HTMLInputElement> ?? undefined}
                            className={`inputStyle1 w-full ${fullWidth ? "" : "lg:basis-[60%]"} relative`}
                            type={type}
                            name={id ?? undefined}
                            id={id ?? undefined}
                            min={min != null ? min as number : undefined}
                            max={max != null ? max as number : undefined}
                            step={step != null ? step as number : undefined}

                        />
                    ) : (
                        <textarea
                            readOnly={readOnly ?? undefined}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            disabled={disabled ?? undefined}
                            placeholder={placeholder ?? undefined}
                            value={value}
                            onChange={onChange as ChangeEventHandler<HTMLTextAreaElement> ?? undefined}
                            className={`inputStyle1 w-full ${fullWidth ? "" : "lg:basis-[60%]"}`}
                            id={id ?? undefined}
                            rows={rows ?? undefined}
                        />
                    )
            }

            {
                (isFocused || isError) && helperText && (<small style={isError ? { color: "var(--errorColor)" } : undefined} className="ml-1 lg:col-start-2 lg:col-end-2">{helperText}</small>)
            }

        </div>
    )
}