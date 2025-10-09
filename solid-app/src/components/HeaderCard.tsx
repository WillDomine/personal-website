export default function HeaderCard() {
    return (
        <div class="flex text-center justify-between p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-2xl m-10">
            <div class="text-left p-10 max-w-lg">
                <h1 class="text-3xl font-bold mb-4">Will Domine</h1>
                <p class="text-lg mb-2">Software Engineer</p>
                <p class="text-md mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores suscipit deleniti sed incidunt deserunt? Officia
                    temporibus eos, perferendis consequuntur repellendus in
                    minus consectetur enim rem quaerat necessitatibus doloremque
                    corporis unde.
                </p>
                <div class="flex">
                    <button>
                        <a href="/about" class="text-white hover:underline">
                            <img src="" alt="Github" />
                        </a>
                    </button>
                </div>
            </div>
            <div class="mt-12 pr-20">
                <img
                    src="/public/will_domine_avatar.jpg"
                    alt=""
                    class="rounded-full border-2 shadow-2xl scale-120 hover:scale-125 animation-pulse"
                />
            </div>
        </div>
    );
}
