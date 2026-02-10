import { MessageSquare } from "lucide-react";

export const TestimonialCard = ({ quote, author, title }: { quote: string, author: string, title: string }) => (
    <div className="flex-shrink-0 w-[350px] md:w-[400px] border border-white/10 rounded-lg p-8 bg-[#1d1c22] mx-4 flex flex-col">
        <MessageSquare className="w-8 h-8 text-[#adff30] mb-4" />
        <p className="text-gray-300 italic flex-grow">{`"${quote}"`}</p>
        <div className="mt-6 border-t border-white/10 pt-4">
            <p className="font-bold text-white">{author}</p>
            <p className="text-sm text-gray-400">{title}</p>
        </div>
    </div>
);
