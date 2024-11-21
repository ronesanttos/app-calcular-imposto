import TexForm from "./components/TexForm"
import TexReport from "./components/TexReport"

import { Container, Typography } from "@mui/material"
import { useState } from "react"

function App() {
  const [taxData, setTexData] = useState(null)

  const calculeTex = (values) => {
    let tax = 0
    const income = parseFloat(values.income)

    if (income <= 1000) {
      tax = income * 0.05
    }
    else if (income <= 20000) {
      tax = income * 0.1
    }
    else {
      tax = income * 0.15
    }

    const taxData = {
      ...values,
      tax
    }
    setTexData(taxData)
  }

  return (
    <Container style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Typography variant="h2" align="center" style={{ marginBottom: "16px" }}>Calculadora de Impostos</Typography>
      <TexForm onSubmit={calculeTex} />
      {taxData && <TexReport taxData={taxData} />}
    </Container>
  )
}

export default App
