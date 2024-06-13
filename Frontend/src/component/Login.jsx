import { useForm } from "react-hook-form";
import toast from "react-hot-toast"
import axios from "axios";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
 

    const onSubmit = async (data) => {
        const userinfo = {
          email: data.email,
          password: data.password,
        };
        try {
          const res = await axios.post("http://localhost:4000/user/login", userinfo);
          console.log(res.data);
          if (res.data) {
            toast.success('Successfully created!');;
            localStorage.setItem("Users", JSON.stringify(res.data));
          } else {
            toast.error('Login failed: no data received');
          }
        } catch (err) {
          if (err.response) {
            console.log(err);
            toast("Error: " + err.response.data.message);
          } else {
            console.log(err);
            toast.error("An unexpected error occurred");

          }
        }
      };
      
    

    const handleLoginFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        handleSubmit(onSubmit)(event); // Call the handleSubmit function with your onSubmit function
    };

    const handleCloseButtonClick = () => {
        // Add logic to close the modal here if needed
        const modal = document.getElementById("my_modal_3");
        modal.close();
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white dark:bg-slate-800">
                    <form onSubmit={handleLoginFormSubmit} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button type="button" onClick={handleCloseButtonClick} className="btn btn-sm btn-circle bg-white absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-5 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                {...register("email", { required: true })}
                                className="bg-white dark:text-slate-800 w-80 h-10 px-3 border outline-none rounded-md"
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className="mt-9 space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                {...register("password", { required: true })}
                                className="bg-white dark:text-slate-800 h-10 w-80 px-3 border outline-none rounded-md"
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500" >This field is required</span>}
                        </div>
                        <div className="flex mt-5 justify-between">
                            <button type="submit" className="py-2 px-3 rounded-md bg-black text-white border-none hover:bg-red-500">Login</button>
                            <div>
                                <span>Not Register? <a href="/signup" className="text-blue-400">Signup</a></span>
                            </div>
                        </div>
                    </form>
        
                </div>
            </dialog>
        </>
    );
}

export default Login;
