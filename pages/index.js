import { useState } from "react";
import { forecast } from "../utils/forecast";

export default function IndexPage() {
  const [value, setValue] = useState(0);

  const getResult = async () => {
    const res = await forecast();
    setValue(res);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="px-4 py-10">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Perkiraan Jumlah Penduduk di Kecamatan Ngluwar
        </h1>
        <div className="mt-4">
          <p>Hasil: {String(value)}</p>
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded"
            onClick={getResult}>
            Forecast
          </button>
        </div>
      </div>
    </div>
  );
}
