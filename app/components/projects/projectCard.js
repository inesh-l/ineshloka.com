export function ProjectCard(props) {
    return (
        <div className="my-8 flex flex-col border-solid border-2 border-gray-500 rounded-xl">
            <div className="flex flex-row px-4 pt-4">
                <h3 className="text-xl font-bold">{props.name}</h3>
            </div>
            <h3 className="text-md px-4 pb-4">{props.description}</h3>
        </div>
    )
}