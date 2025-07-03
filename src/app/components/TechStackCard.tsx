// A new, more dynamic TechStackCard proposal


    

const TechStackCard = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => {
    return (
        <div className=' rounded-lg bg-[var(--darkColor)]/50 border border-white/10 transition-all   
        flex flex-col items-center justify-center gap-4 p-4 md:p-6 backdrop-blur-sm duration-300  
        hover:bg-[var(--greenYellowish)] hover:border-[var(--greenYellowish)] hover:-translate-y-2
        group'>
            <Icon className=' group-hover:text-black transition-all w-8 h-8 md:w-10 md:h-10 text-gray-300' />
            <p className='text-sm font-medium text-gray-200 group-hover:text-black transition-all'>{title}</p>
        </div>
    );
};

export default TechStackCard