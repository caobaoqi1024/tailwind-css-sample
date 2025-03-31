export default function Home() {

    const  imgList = [
        "/mcdd01/ok.gif",
        "/mcdd01/呆滞.gif",
        "/mcdd01/哈哈.gif",
        "/mcdd01/哼.gif",
        "/mcdd01/嗯嗯.gif",
        "/mcdd01/大哭.gif",
        "/mcdd01/害羞.gif",
        "/mcdd01/打.gif",
        "/mcdd01/无语.gif",
        "/mcdd01/汗.gif",
        "/mcdd01/生气.gif",
        "/mcdd01/送花.gif",
        "/mcdd01/酷.gif",
    ]

    return (
        <>
            <div className={"w-10/12 mx-auto columns-2 hover:columns-xs gap-x-5"}>
                {
                    imgList.map((img, index) => {
                        return (
                            <div key={index} className={"border-[1px] border-pink-500"}>
                                <img src={img} alt={''}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
