export default function Profile() {
  return (
    <>
      <div className="flex my-20 mx-[165px]">
        <div className="flex-initial bg-gray-100 rounded-xl p-9">
          <div className="flex items-center">
            <div className="flex-initial w-10">
              <img src="src/assets/images/profile.png" alt="" />
            </div>
            <div className="flex-initial w-10 pl-3">
              <h1 className="font-bold text-xl">Ujang</h1> <h3>234758912</h3>
            </div>
          </div>
          <div className="mt-11">
            <h1 className="font-bold">Jurusan</h1>
            <h3>Teknologi Informasi</h3>
            <div className="mt-6">
              <h1 className="font-bold">Prodi</h1>
              <h3>Sistem Informasi Bisnis</h3>
            </div>
            <div className="mt-6">
              <h1 className="font-bold">No Hp.</h1>
              <h3>083843318090</h3>
            </div>
            <div className="mt-6">
              <h1 className="font-bold">email</h1>
              <h3>ujangujang@gmail.com</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-initial ml-9 ">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left mb-5 text-gray-500 dark:text-gray-400">
              <thead className="text-sm rounded-lg uppercase bg-black text-white font-bold">
                <tr>
                  <th scope="col" className="px-6 py-4 rounded-l-lg">
                    BIKE CODE
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4 ">
                    Pick Up Time
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Return Time
                  </th>
                  <th scope="col" className="px-6 py-4 rounded-r-lg">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="bg-primary border-red-50 rounded-lg text-sm text-black font-semibold">
                  <th scope="row" className="px-6 py-4 rounded-l-lg">
                    005
                  </th>
                  <td className="px-6 py-4 ">02/10/2023</td>
                  <td className="px-6 py-4">13.00 WIB</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4 rounded-r-lg">Active</td>
                </tr>
                <tr className="bg-gray-100 border-red-50 rounded-lg text-black font-semibold">
                  <th scope="row" className="rounded-l-lg px-6 py-4">
                    005
                  </th>
                  <td className="px-6 py-4">02/10/2023</td>
                  <td className="px-6 py-4">12.00 WIB</td>
                  <td className="px-6 py-4">13.00 WIB</td>
                  <td className="px-6 py-4 rounded-r-lg">Returned</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
