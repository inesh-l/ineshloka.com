'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ContactCard(props) {
    const icon = props.icon;
    const text = props.text;
    const link = props.link;
    return (
        <a href={link} target="_blank">
            <div className="flex flex-col items-center w-44 h-44 p-8">
                <FontAwesomeIcon icon={icon} style={{color: "#ffffff",}} />
                <h1 className="font-bold text-xl">{text}</h1>
            </div>
        </a>
    )
    
}