import type { Button } from "./button"
import type { ImageProperties } from "./image"

export class Card {
    title: string = "Card"
    subtitle: string = "Subtitle"
    text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a tortor risus. Duis aliquet pulvinar commodo. Mauris faucibus massa sit amet purus vestibulum congue. Sed ut nunc id velit varius ultricies sed eu sapien."
    button: Button = {
        text: "Go",
        link: "javascript:void(0)",
        disabled: false
    }
    image: ImageProperties = {
        src: "/images/placeholder.jpg",
        alt: "Cactus in a pot"
    }
    constructor(title: string,sub :string,text: string, image: ImageProperties, button: Button) {
        this.title = title
        this.subtitle = sub
        this.text = text
        this.image = image

        this.button = button
    }
}
