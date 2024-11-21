import { Container, Typography } from "@mui/material"

const TexReport = ({ taxData }) => {
    return (
        <Container>
            <Typography style={{ marginTop: "20px" }} variant="h4">
                Relatório de Imposto
            </Typography>
            <Typography style={{ marginTop: "10px" }} variant="body1">Nome: {taxData.name} </Typography>
            <Typography style={{ marginTop: "10px" }} variant="body1">Idade: {taxData.age} anos</Typography>
            <Typography style={{ marginTop: "10px" }} variant="body1">Renda: {""} {parseFloat(taxData.income).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} </Typography>
            <Typography style={{ marginTop: "10px" }} variant="h6">Imposto a pagar:{""} {parseFloat(taxData.tax).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Typography>
        </Container>
    )
}

export default TexReport
