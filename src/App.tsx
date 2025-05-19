import {} from "react";
import Header from "@/components/Header";
import NotificationButton from "@/components/NotificationButton";

function App() {
  return (
    <>
      <Header />
      <NotificationButton />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Erros do Extraidados</h1>
        <div className="h-[3px] bg-[#F31E8D] w-full mt-2 mb-4" />
        <hr style={{ height: "3px", backgroundColor: "#F31E8D", border: "none", width: "100%" }} />
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
              {Array.from({ length: 5 }).map((_, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-6 py-4">Exemplo</td>
                  <td className="px-6 py-4">Exemplo</td>
                  <td className="px-6 py-4">Exemplo</td>
                  <td className="px-6 py-4">Exemplo</td>
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
