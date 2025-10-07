import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 px-[2rem] py-[1rem] hover:border-red-500" 
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
}
