export default function Login() {
  return (
    <div className="bg-cover h-screen bg-center flex items-center justify-center bg-[url('src/assets/images/login-bg.png')]">
      <div className="rounded-xl shadow-xl max-w-md mx-auto bg-white">
        <div className="p-9">
          <h1 className="text-center font-bold text-3xl">Login and Enjoy Your Ride</h1>
          <p className="my-3 text-center text-sm">Get your bike and explore Polinema comfortably</p>
          <div className="mt-12">
            <div className="my-5">
              <h6 className="text-sm">NIM</h6>
              <div className="mt-2">
                <input className="border border-black rounded-md p-2 w-full" type="text" />
              </div>
            </div>
            <div className="my-5">
              <h6 className="text-sm">Password</h6>
              <div className="mt-2">
                <input className="border border-black rounded-md p-2 w-full" type="password" />
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
          </div>
          <button className="rounded-md p-2 w-full bg-primary text-center text-base font-semibold roun">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}
