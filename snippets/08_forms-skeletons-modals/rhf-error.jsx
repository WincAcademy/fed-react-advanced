// ...

// From our useForm(), we now want the formState as well to be 
// be able to use the error state
const { register, handleSubmit, formState: { errors } } = useForm();

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input
            /* Notice how we changed the boolean value to a string?
               This string will be the error message if the field
               has not been filled in. */
            {...register("name", { required: "Name is required!" })}
            placeholder="Name"
        />
        <input
            /* And we do the same for our email field */
            {...register("email", { required: "Email is required!"})}
            placeholder="Email" 
        />
        
        <button type="submit">Submit</button>

        { /* We can then print the error, if needed */ }
        {errors.name && <p>{errors.name.message}</p>}
    </form>
);