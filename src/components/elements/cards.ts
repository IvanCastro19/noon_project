import vectorSvg from "../../assets/svg/Vector.svg";
import vectorSvg2 from "../../assets/svg/Vector-2.svg";
import materialSvg from "../../assets/svg/objeto-restar 1.svg";
import groupSvg from "../../assets/svg/Group 1.svg";
import { cardInterface } from "../../interfaces/cards";

export const cards: cardInterface[] = [
    {
        title: "Style",
        text: "Choose your style",
        Icon: vectorSvg
    },
    {
        title: "Material",
        text: "Choose material",
        Icon: materialSvg
    },
    {
        title: "Creativity",
        text: "High-level",
        Icon: vectorSvg2
    },
    {
        title: "AI model",
        text: "Midjourney 5.0",
        Icon: groupSvg
    }
];