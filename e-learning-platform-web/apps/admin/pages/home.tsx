export default function Home() {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target.elements;
        console.log(form.files.files);
        for (const file of form.files.files) {
            console.log(file)
        }
        console.log(["Hello", "a;dl"])
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="files" type={"file"} multiple />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}