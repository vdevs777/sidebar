import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";

interface SidebarSubButtonInterface {
    text: string
    squareColor: string,
    marginLeft: string,
    url: string
}

export function SidebarSubButton({ text, squareColor, marginLeft, url }: SidebarSubButtonInterface) {
    const navigate = useNavigate()

    function handleNavigate (path: string) {
        navigate(`${path}`)
    }

    return (
        <Button onClick={() => handleNavigate(url)} className="relative group w-full h-8 rounded-none flex justify-start gap-4  bg-white text-slate-800 hover:bg-zinc-200">
            <p className={`${marginLeft}`}>{text}</p>
            <span className={`absolute right-0 h-full w-1 ${squareColor} opacity-0 group-hover:opacity-100`}></span>
        </Button>
    )
}