import { useState } from "react";
import useProcessando from "./useProcessando";
import { useEffect, useCallback } from "react";

export default function useStarWars() {
	const [personagens, setPersonagens] = useState<any[]>([]);
	const [personagem, setPersonagem] = useState<any>([]);
	const [filmes, setFilmes] = useState<any>([]);
	const { processando, iniciarProcessamento, finalizarProcesamento } =
		useProcessando();

	const obterFilmes = useCallback(
		async function (personagem: any) {
			if (!personagem?.films?.length) return;
			try {
				iniciarProcessamento();
				const reqs = personagem.films.map(async (film: string) => {
					const resp = await fetch(film);
					return resp.json();
				});

				const filmes = await Promise.all(reqs);
				setFilmes(filmes);
			} finally {
				finalizarProcesamento();
			}
		},
		[iniciarProcessamento, finalizarProcesamento]
	);

	const obterPersonagens = useCallback(
		async function () {
			try {
				iniciarProcessamento();
				const resp = await fetch("https://swapi.dev/api/people/");
				const dados = await resp.json();
				setPersonagens(dados.results);
			} finally {
				finalizarProcesamento();
			}
		},
		[iniciarProcessamento, finalizarProcesamento]
	);

	function selecionarPersonagem(personagem: any) {
		setPersonagem(personagem);
	}

	function voltar() {
		setPersonagem(null);
		setFilmes([]);
	}

	useEffect(() => {
		obterPersonagens();
	}, [obterPersonagens]);

	useEffect(() => {
		obterFilmes(personagem);
	}, [personagem, obterFilmes]);

	return {
		personagens,
		processando,
		selecionarPersonagem,
		filmes,
    voltar
	};
}
