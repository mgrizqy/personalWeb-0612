import { Code } from "lucide-react"


const SectionDivider = () => {

   return <div className="flex items-center justify-center gap-4 my-24 w-full">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <Code className="text-[var(--greenYellowish)] flex-shrink-0" size={24} />
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
    </div>

}

export default SectionDivider