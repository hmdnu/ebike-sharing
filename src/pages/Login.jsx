import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
  const [input, setInput] = useState({ nim: "2713326578", password: "mahasiswa01" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
        headers: {
          "Content-type": "application/json",
        },
        credentials: "omit",
        method: "POST",
        body: JSON.stringify({
          nim: input.nim,
          password: input.password,
        }),
      });

      const res = await data.json();

      if (res.success) {
        setLoading(false);
        Cookies.set("auth", res.token, { expires: 1 });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      if (error) {
        setLoading(false);
        setError(true);
      }
    }
  }

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="bg-cover h-screen bg-center flex items-center justify-center bg-loginBg">
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
              {loading ? "Loading..." : "SIGN IN"}
            </button>
            <h1>{error && "Error"}</h1>
          </form>
        </div>
      </div>
    </div>
  );
}
