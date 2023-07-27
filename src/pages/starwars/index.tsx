import Personagens from "@/components/starwars/Personagens";
import Background from "@/components/starwars/background";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
  const { processando, obterPersonagens, personagens } = useStarWars();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <Background/>
      
      <button onClick={obterPersonagens} className="bg-blue-700 p-2 rounded-md">
        Obter
      </button>
      
      {processando ? (
        <div>Processando...</div>
      ) : personagens.length > 0 ? (
        <Personagens personagens={personagens}/>
      ) : (
        <h1>Nenhum personagem encontrado</h1>
      )}

    </div>
  );
}
