import { useForm } from "@inertiajs/react";

const TestPost = () => {
    const { data, setData, post } = useForm({
        message: "",
    });
    const submit = () => {
        post(route("calendartest.post", data));
    };

    return (
        <form onSubmit={submit}>
            <input
                type="text"
                value={data.message}
                onChange={(e) => setData("message", e.target.value)}
            ></input>
            <button type="submit" p>
                test
            </button>
        </form>
    );
};
export default TestPost;
