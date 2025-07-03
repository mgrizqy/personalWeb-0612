


const ValueCard = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => {

    return (

        <div className='group relative min-h-[67px] min-w-[350px] px-8    rounded-xl bg-[var(--darkColor)] overflow-hidden border border-white/10 transition-all duration-300 flex items-center justify-center gap-4 hover:border-[var(--greenYellowish)]/50 '>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className='border border-white/10 
            bg-gradient-to-br from-[#adff30]/20 to-[#adff30]/5
            rounded-lg p-1 '>
                <Icon className='text-[var(--greenYellowish)]/80 w-7 h-7'  />
            </div>
            <p className='font-medium text-sm md:text-xl '>{title}</p>

        </div>

    )

}

export default ValueCard