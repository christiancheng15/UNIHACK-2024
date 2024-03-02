import { ChangeEventHandler } from "react"

interface IInputOption {
    text: string,
    value: any
}

interface ISelectInput {
    options: IInputOption[],
    title: string,
    onChange: ChangeEventHandler<HTMLSelectElement>
}

export default function SelectInput(
    {
        options = [],
        title,
        onChange
    }: ISelectInput
) {
    return (
        <div className="py-4 pl-1">
            <div className="inputStyle1 bg-white rounded-lg px-4 py-2 flex flex-col relative">
                <small className="absolute -top-[0.7rem] bg-[var(--backgroundColor1)] px-1 whitespace-nowrap">{title}</small>
                <select onChange={onChange ?? undefined} name="reviewRating" id="reviewRating">
                    {
                        options.map((option, i) => (
                            <option key={i} value={option.value}>{option.text}</option>
                        ))
                    }

                </select>
            </div>
        </div>
    )


}