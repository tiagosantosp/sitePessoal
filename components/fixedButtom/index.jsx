import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import BotaoFixed from "../utils/btnFixed";

function FixedButtons() {
    return (
        <div className="fixed right-4 bottom-4 flex flex-col gap-4">
            <BotaoFixed link='https://github.com/tiagosantosp' color="hover:text-gray-500"><FaGithub /></BotaoFixed>
            <BotaoFixed link='https://www.linkedin.com/in/tiagosantosp/' color="hover:text-blue-500"><FaLinkedinIn /></BotaoFixed>
            <BotaoFixed link='https://wa.me/5511983342114' color="hover:text-green-500"><FaWhatsapp /></BotaoFixed>
            <BotaoFixed link='https://www.instagram.com/tigosantosp/' color="hover:text-purple-300"><FaInstagram /></BotaoFixed>
        </div>
    )
}

export default FixedButtons;