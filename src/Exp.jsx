export default function ExpForm({ onAddExp }) {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        onAddExp(formJson);
    }
    return (
        <>
            <form action="post" onSubmit={handleSubmit}>
                <label htmlFor="">
                    Company: 
                    <input type="text" name="company" />
                </label>
                <label htmlFor="">Position: <input type="text" name="position"/></label>
                <label htmlFor="">From: <input type="date" name="from"/></label>
                <label htmlFor="">To: <input type="date" name="to"/></label>
                <button>Add</button>
            </form>
        </>
    )
}