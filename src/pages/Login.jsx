import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({ nim: "", password: "" });
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const data = await fetch(
        `${import.meta.env.VITE_API_URL}/user` || "http://localhost:5000/user",
        {
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
          method: "POST",
          body: JSON.stringify({
            ...input,
          }),
        }
      );

      const res = await data.json();

      console.log(res);
      if (res.success) {
        localStorage.setItem("name", res.nama);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-cover h-screen bg-center flex items-center justify-center bg-[url('src/assets/images/login-bg.png')]">
      <div className="rounded-xl shadow-xl max-w-md mx-auto bg-white">
        <div className="p-9">
          <h1 className="text-center font-bold text-3xl">Login and Enjoy Your Ride</h1>
          <p className="my-3 text-center text-sm">Get your bike and explore Polinema comfortably</p>

          <form onSubmit={handleLogin} className="mt-12">
            <div className="my-5">
              <h6 className="text-sm">NIM</h6>
              <div className="mt-2">
                <input
                  className="border border-black rounded-md p-2 w-full"
                  type="text"
                  onChange={(e) => setInput({ ...input, nim: e.target.value })}
                  value={input.nim}
                />
              </div>
            </div>
            <div className="my-5">
              <h6 className="text-sm">Password</h6>
              <div className="mt-2">
                <input
                  className="border border-black rounded-md p-2 w-full"
                  type="password"
                  onChange={(e) => setInput({ ...input, password: e.target.value })}
                  value={input.password}
                />
              </div>
            </div>
            <div className="my-10 flex flex-row w-full justify-between items-center">
              <div className="flex justify-between items-center gap-3">
                <input type="checkbox" />
                <label className="text-sm">Remember me</label>
              </div>

              <div className="basis-1/2">
                <h6 className="text-right text-sm font-semibold">
                  <a href="#">Forgot Password ?</a>
                </h6>
              </div>
            </div>
            <button className="rounded-md p-2 w-full bg-primary text-center text-base font-semibold roun">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
