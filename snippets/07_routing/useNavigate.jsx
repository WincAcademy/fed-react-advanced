import { useNavigate } from "react-router-dom";

export const CreateUser = ({ user }) => {
    // Step 1: Set up the useNavigate hook
    const navigate = useNavigate();

    // Step 2: Define the function to create a user
    const createUser = async user => {
        try {
            // Step 3: Send a request to the server to create a new user
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "Content-Type": "application/json;charset=utf-8" },
            });

            // Step 4: Check if the request was successful
            if (!response.ok) {
                throw new Error(`Failed to create a user. Status: ${response.status}`);
            }

            // Step 5: Get the new user's ID from the server's response
            const id = (await response.json()).id;

            // Step 6: Use the navigate function to go to the new user's page
            navigate(`/users/${id}`);
        } catch (error) {
            // Step 7: Handle any errors that might occur during this process
            console.error("An error occurred while creating a user:", error);
            
            // You can add more specific error handling or show a user-friendly message here.
        }
    };

    // Step 8: Create a button that calls the createUser function when clicked
    return <button onClick={() => createUser(user)}>Create User</button>;
};
