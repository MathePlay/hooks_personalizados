import {Check} from 'lucide-react'

interface PersonagensProps {
	personagens: any[];
  selecionar: (personagem: any) => void;
}

export default function Personagens(props: PersonagensProps) {
	return (
		<table className="w-3/5 text-xl rounded-lg overflow-hidden">
			<thead>
				<tr className="bg-black/90">
					<th className="p-2 font-black">Nome</th>
					<th className="p-2 font-black">Altura</th>
					<th className="p-2 font-black">Peso</th>
					<th className="p-2 font-black">Açoes</th>
				</tr>
			</thead>
			<tbody>
				{props.personagens.map((p: any, indice: number) => (
					<tr
						key={indice}
						className={` text-center  ${indice % 2 === 0 ? "bg-black/50" : "bg-white/5"} `}
					>
						<td className="p-2">{p.name}</td>
						<td className="p-2">{p.height}</td>
						<td className="p-2">{p.mass}</td>
						<td className="p-2">
              <button onClick={() => props.selecionar(p)} className="bg-blue-500/70 px-3 py-1 rounded hover:bg-blue-700/70">
                <Check size={20} />
              </button>
            </td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
