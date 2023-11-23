import styled from "styled-components";
import { theme } from "../../theme/Theme";

function UpdateProduct() {
    return (
        <>
            <UpdateFormStyled>
                <p>Modifier un produit</p>
            </UpdateFormStyled> 
        </>
    )
}

export default UpdateProduct

const UpdateFormStyled = styled.form `
    width: 100%;
    height: 30vh;
    background: white;
    border-radius: 0px 0px ${theme.borderRadius.round} ${theme.borderRadius.round};
    padding: ${theme.spacing.md};
    display: flex;
    justify-content: space-between;
    & p {
        font-family: 'Open Sans';
    }
`