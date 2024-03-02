import { Link } from "react-router-dom"
import Button, { BUTTON_TYPES } from "../components/input/Button"

export default function Page404() {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center white px-6 py-6">
            <h1 className="text-5xl font-bold mb-8">404</h1>
            <p className="text-xl mb-8">Sorry, we couldn't find the page you were looking for.</p>
            <div className="flex justify-center mb-8 space-x-4">
                <Button
                    type={BUTTON_TYPES.normal}
                    element={<Link
                        className="text-white"
                        to='/'
                    >Home</Link>}
                />
                <Button
                    type={BUTTON_TYPES.normal}
                    element={<Link
                        className="text-white"
                        to='/auth/login'
                    >Login</Link>}
                />
                <Button
                    type={BUTTON_TYPES.normal}
                    element={<Link
                        className="text-white"
                        to='/auth/register'
                    >Register</Link>}
                />
                <Button
                    type={BUTTON_TYPES.normal}
                    element={<Link
                        className="text-white"
                        to='/app/read'
                    >Read</Link>}
                />

                {/* <button onClick={handleRegister} className='button_normal1 w-24'>Register</button>
                <button onClick={handleSplash} className='button_normal1 w-24'>Home</button> */}
            </div>
            <p className="text_shade_4 text-base mb-8">Wasn't supposed to happen? <Link to='/contact' className="underline hover:text-gray-700 transition-all">contact us</Link>.</p>
        </div>


    )
}