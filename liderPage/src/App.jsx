import {
  Home,
  Definition,
  Skills,
  Sidebar,
  Motivaciones,
  Mensaje,
  VidaAcademica,
  RecursosPersonales,
} from "./components";

function App() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white overflow-hidden">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[10%] translate-y-[20%] rounded-full bg-[#81abf5] opacity-50 blur-[80px]"></div>
        <div className="absolute bottom-auto right-auto left-0 top-80 h-[500px] w-[500px] -translate-x-[20%] translate-y-[20%] rounded-full bg-[#81abf5] opacity-50 blur-[80px]"></div>
        <div className="absolute left-auto right-0 top-[900px] h-[500px] w-[500px] -translate-x-[50%] translate-y-[20%] rounded-full bg-[#81abf5] opacity-50 blur-[80px]"></div>
        <div className="absolute bottom-auto left-0 right-auto top-[1500px] h-[500px] w-[500px] -translate-x-[20%] translate-y-[20%] rounded-full bg-[#81abf5] opacity-50 blur-[80px]"></div>
        <div className="absolute bottom-0 left-auto right-0 top-auto h-[500px] w-[500px] -translate-x-[10%] translate-y-[20%] rounded-full bg-[#81abf5] opacity-50 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] -translate-x-[10%] translate-y-[20%] rounded-full bg-[#81abf5] opacity-50 blur-[80px]"></div>
      </div>
      <Sidebar />
      <Home />
      <Definition />
      <Skills />
      <Motivaciones />
      <VidaAcademica />
      <RecursosPersonales />
      <Mensaje />
    </>
  );
}

export default App;
