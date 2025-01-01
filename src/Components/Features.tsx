interface FeaturesProps {
    text: string;
    src: string;
    color: string;
}

const Features: React.FC<FeaturesProps> = ({ text, src, color }) => {
    return (

        <div className="p-3 border border-[#F1F1F3] flex gap-3 rounded-lg">
            <div className="w-fit p-2 rounded-md h-fit" style={{ backgroundColor: color}}><img className="h-[8px] w-auto" src={src} alt="" /></div>
            <div className="text-[#4C4C4D] text-base">{text}</div>
        </div>
    )
}

export default Features
