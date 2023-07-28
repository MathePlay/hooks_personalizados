import { useState, useCallback } from "react";

export default function useProcessando() {
	const [processando, setProcessando] = useState<Boolean>(false);

	const iniciarProcessamento = useCallback(function () {
		setProcessando(true);
	}, []);

	const finalizarProcesamento = useCallback(function () {
		setProcessando(false);
	}, []);

	return {
		processando,
		iniciarProcessamento,
		finalizarProcesamento,
	};
}
