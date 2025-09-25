import { useForm } from "react-hook-form";

export function SimpleForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Name" />
            <input {...register("email")} placeholder="Email" />
            
            <button type="submit">Submit</button>
        </form>
    );
};