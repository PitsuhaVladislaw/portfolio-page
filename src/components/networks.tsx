import "@/app/globals.css"
import { ArraySocialAcc, SocialAcc } from "@/types/typeSocialAcc";
import TitleComponent from "./TitleComponent";

export const GridBlockItem: React.FC<SocialAcc> = ({ Icon, title }) => {
    return (
        <article className="flex flex-col justify-between rounded-md outline outline-4 outline-gray-600 items-center gap-5 p-5 w-40 h-40">
            <Icon className="text-blue-700 w-16 h-16" />
            <h5 className="uppercase font-bold text-white" style={{ wordSpacing: "10px" }}>
                {title}
            </h5>
        </article>
    );
}

export const DivItem = ({i, j}: {i: number, j: number}) => {
    return(
        <div className="flex items-center justify-between">
            {ArraySocialAcc.slice(i, j).map((item, index) => (
                <GridBlockItem
                    key={index}
                    Icon={item.Icon}
                    title={item.title}
                />
            ))}
        </div>
    )
}

function Networks() {
    return(
        <section id="Networks" className="flex flex-col justify-between p-10 gap-20">
            <TitleComponent 
                title="My social networks"
                description="Contact me on social media: LinkedIn, Instagram, Facebook, Telegram, and VKontakte"
                position="start"
            />
            <article className="flex flex-col justify-between gap-20 w-auto">
                <DivItem 
                    i={0}
                    j={3}
                />
                <DivItem 
                    i={3}
                    j={6}
                />
            </article>
        </section>
    )
}

export default Networks;