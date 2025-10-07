
export default function Header() {
    return (
        <header class="flex p-4 bg-night text-start justify-between items-center text-day sticky">
            <div>
                <img src="" alt="" class="" />
                <h1 class="text-2xl font-bold ">Will Domine</h1>
            </div>
            <nav>
                <a href="/" class="mx-2  hover:text-red-500">Home</a>
                <a href="#about" class="mx-2 hover:text-red-500">About</a>
                <a href="#projects" class="mx-2 hover:text-red-500">Projects</a>
                <a href="#contact" class="mx-2 hover:text-red-500">Contact</a>
            </nav>
        </header>
    )
}