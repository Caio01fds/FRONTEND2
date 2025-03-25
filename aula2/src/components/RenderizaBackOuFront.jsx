import React from "react"

const RenderizaBackOuFront = () => {

    function escolhaBackOuFront(oQueRenderizar) {
        if (oQueRenderizar === "Java") {
            return <h1>Backend</h1>
        }else if (oQueRenderizar === "React") {
            return <h2>Frontend</h2>
        }else if (oQueRenderizar === "AWS") {
            return <i>Cloud</i>
        }else {
            return "Escolha não identificada"
        }
    }

  return (
    <div>
        {escolhaBackOuFront("Java")}
        {escolhaBackOuFront("React")}
        {escolhaBackOuFront("AWS")}
    </div>
  )
}

export default RenderizaBackOuFront
