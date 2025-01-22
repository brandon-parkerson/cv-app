

export default function EducationForm({ onAddEducation }) {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        onAddEducation(formJson);
    }
    return (
        <>
            <form action="post" onSubmit={handleSubmit}>
                <label htmlFor="">
                    School: 
                    <input type="text" name="school" />
                </label>
                <label htmlFor="">Degree: <input type="text" name="degree"/></label>
                <label htmlFor="">Date: <input type="date" name="date"/></label>
                <button>Add</button>
            </form>
        </>
    )
}