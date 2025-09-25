// ...

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        { /* We can add an optional required field in the register function */ }
        <input {...register("name", { required: true })} placeholder="Name" />
        <input {...register("email", { required: true })} placeholder="Email" />
        
        <button type="submit">Submit</button>
    </form>
);