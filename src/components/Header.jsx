import happy from "/src/assets/happy.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={happy} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}