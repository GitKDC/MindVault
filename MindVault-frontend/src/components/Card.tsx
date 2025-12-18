import { ShareIcon } from "../icons/ShareIcon";
import { ContentType } from "../types/content";

interface CardProps {
    title : string;
    link : string;
    type : ContentType;
}

export function Card ( { title , link , type} : CardProps) {
    return (
        <div className="bg-white rounded-md shadow-md border-slate-200 p-8 max-w-85 min-w-85 border min-h-35"> 
            <div className="flex justify-between">
                <div className="flex items-center pr-4 text-md">
                    <div className="text-gray-500 pr-3">
                        <ShareIcon />
                    </div>
                    {title}
                </div>
                <div className="flex">
                    <div className="pr-3 text-gray-500">
                        <a href={link} target="_blank"></a>
                        <ShareIcon />
                    </div>
                    <div className="pr-3">
                        <ShareIcon />
                    </div>
                    
                </div>
            </div>
            <div className="pt-4">
                { type === ContentType.Youtube && <iframe className="w-full h-full" width="560" height="315" src={`https://www.youtube.com/embed/${link.split("v=")[1]}`} /*this converts watch?v=abc123 → embed/abc123*/ title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                { type === ContentType.X && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                 </blockquote>}

            </div>
           
        </div>
    )
}