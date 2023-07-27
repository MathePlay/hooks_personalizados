import Image from "next/image";

export default function Background() {
    return (
        <Image 
            src="https://i0.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2021/05/wallpapers-do-star-wars-01.jpg?ssl=1" 
            fill
            alt="Wallpaper" 
            className="-z-50 opacity-25 object-cover"
        />
    )
}