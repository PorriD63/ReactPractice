import './Header.css'

interface HeaderProps {
    name: string
    title: string
    github: string
    linkedin: string
}

export function Header({ name, title, github, linkedin }: HeaderProps) {
    return (
        <header className="header">
            <h1>{name}</h1>
            <p className="title">{title}</p>
            <div className="contact-links">
                <a href={github} target="_blank">GitHub</a>
                <a href={linkedin} target="_blank">LinkedIn</a>
            </div>
        </header>
    )
}