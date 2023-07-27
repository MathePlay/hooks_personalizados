import { useState } from "react"

export default function useProcessando() {
  const [processando, setProcessando] = useState<Boolean>(false);

  function iniciarProcessamento() {
    setProcessando(true);
  }

  function finalizarProcesamento() {
    setProcessando(false);
  }

  return {
    processando,
    iniciarProcessamento,
    finalizarProcesamento,
  };
}
