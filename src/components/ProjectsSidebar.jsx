import Button from "./Buttons"

export default function Sidebar({ onStartAddProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div className="w-[35rem] mt-16">
                <Button onClick={onStartAddProject}>+ add project</Button>
            </div>
            <ul className="p-4 mt-8 rounded-md bg-stone-100"></ul>
        </aside>
    )
}