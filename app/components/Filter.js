import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Slider } from "@/components/ui/slider"

export default function Filter({ type, name, content = [], bg = "" }) {

    switch (type) {
        case "drop":
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger className={`border border-black rounded-sm px-2 py-1 mr-2 ${bg}`}>{name}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {content.map((el, i) => {
                            return (
                                <div key={i} className="flex flex-row justify-between">
                                    <DropdownMenuItem >{el}</DropdownMenuItem>
                                    <input
                                        type="checkbox"
                                        defaultChecked={true}
                                        value={el}
                                    />
                                </div>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            )

        case "text":
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger className="border border-black rounded-sm px-2 py-1 mr-2">{name}</DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-row my-1">
                        <p>Hasta</p>
                        <input
                            type="text"
                            placeholder="Max"
                            className="border border-black rounded-md w-2/3 ml-2 px-1"
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            )

        case "slider":
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger className="border border-black rounded-sm px-2 py-1 mr-2">{name}</DropdownMenuTrigger>
                    <DropdownMenuContent className="w-72">
                        {content.map((el, i) => {
                            return (
                                <div key={i} className="flex flex-row justify-around mx-2 mb-2">
                                    <p className="flex items-center">{el}</p>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between -mx-1" id="slide">
                                            {[1, 2, 3, 4, 5].map((num, index) => (
                                                <span key={index} className="w-1/5 text-center">{num}</span>
                                            ))}
                                        </div>
                                        <Slider defaultValue={[1]} min={1} max={5} step={1} className="w-36" />
                                    </div>
                                </div>
                            )
                        })
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            )
    }
}