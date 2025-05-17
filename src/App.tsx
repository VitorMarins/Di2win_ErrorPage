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
        <hr style={{ height: "3px", backgroundColor: "#F31E8D", border: "none", width: "100%" }} />
      </main>
    </>
  );
}

export default App;
