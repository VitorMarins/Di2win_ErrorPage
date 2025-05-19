import {} from "react";
import Header from "@/components/Header";

const Data = [
  { errorReason: "Erro 1", client: "Cliente A", dateTime: "2023-01-01 10:00", aiModels: "Modelo X" },
  { errorReason: "Erro 2", client: "Cliente B", dateTime: "2023-01-02 11:00", aiModels: "Modelo Y" },
  { errorReason: "Erro 3", client: "Cliente C", dateTime: "2023-01-03 12:00", aiModels: "Modelo Z" },
  { errorReason: "Erro 4", client: "Cliente D", dateTime: "2023-01-04 13:00", aiModels: "Modelo W" },
  { errorReason: "Erro 5", client: "Cliente E", dateTime: "2023-01-05 14:00", aiModels: "Modelo V" },
];

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl text-left font-bold text-gray-800">Erros do Extraidados</h1>
        <hr className="h-[3px] bg-[#F31E8D] w-200 mt-2 mb-4 border-none" /> 
        <input type="search" name="search" id="search" placeholder="Search..." />
        <input type="datetime-local" name="" id="" />
        <div className="bg-white shadow-md rounded-md overflow-x-auto">
          <table className="min-w-full text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-700">Motivo do Erro</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Cliente</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Data e Hora</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Modelos de IA</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-6 py-4">{row.errorReason}</td>
                  <td className="px-6 py-4">{row.client}</td>
                  <td className="px-6 py-4">{row.dateTime}</td>
                  <td className="px-6 py-4">{row.aiModels}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
