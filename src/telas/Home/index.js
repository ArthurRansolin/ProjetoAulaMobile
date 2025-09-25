import React from "react";
import Topo from "./Componentes/Topo.js";
import Produtores from "./Componentes/Produtores.js";

export default function Home() {
  // return <>
  //   <Topo />
  //   <Produtores />
  // </>
  return <Produtores topo={Topo} />
}



