import ToggleColorModeButton from "../components/input/ToggleColorModeButton";

export default function PageHome() {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--backgroundColor1)] px-6 py-6">
            <ToggleColorModeButton
                className={"!transition-none"}
                iconSize={269}
            />
            <p>test</p>
        </div>


    )
}