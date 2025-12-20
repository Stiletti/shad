import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export function Pnf() {
    const [timer, setTimer] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => {
                setTimer(timer - 1)
            }, 1000);
        } else {
            navigate("/dashboard")
        }
    }, [timer]);

    return (
        <div>
            <h1>Page not found...{timer}</h1>
        </div>
    );
}