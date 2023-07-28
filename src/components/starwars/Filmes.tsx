interface FilmesProps {
	filmes: any[];
	voltar: () => void;
}

export default function Filmes(props: FilmesProps) {
	return (
		<div className="flex flex-col gap-5 items-center w-full">
			<table className="w-3/5 text-xl rounded-lg overflow-hidden">
				<thead>
					<tr className="bg-black/90">
						<th className="p-2 font-black">Título</th>
						<th className="p-2 font-black">Episodio</th>
						<th className="p-2 font-black">Data</th>
					</tr>
				</thead>
				<tbody>
					{props.filmes.map((f: any, indice: number) => (
						<tr
							key={indice}
							className={` text-center  ${
								indice % 2 === 0 ? "bg-black/50" : "bg-white/5"
							} `}
						>
							<td className="p-2">{f.title}</td>
							<td className="p-2">{f.episode_id}</td>
							<td className="p-2">
								{new Date(f.release_date).toLocaleDateString(
									"pt-BR"
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={props.voltar}>Voltar</button>
		</div>
	);
}
