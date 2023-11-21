import styled from 'styled-components';
import { theme } from '../../theme/Theme';
import { FaRegUserCircle } from "react-icons/fa";

function ProfileWidget() {
    return (
        <ProfileDiv>
            <ProfileDetail>
                <ProfileText>Salut <span>Etienne</span></ProfileText>
                <ProfileLogOut href="/">Se déconnecter</ProfileLogOut>
            </ProfileDetail>
            <FaRegUserCircle size={50} />
        </ProfileDiv>
    )
}

export default ProfileWidget;

const ProfileDiv = styled.div `
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md}
`

const ProfileDetail = styled.div `
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans';
    text-align: end;
    gap: ${theme.spacing.xxs}
`

const ProfileText = styled.p `
    color: ${theme.colors.greyMedium};
    font-family: 'Open Sans';
    & span {
        color: ${theme.colors.primary_cake};
        font-weight: bold;
    }
`

const ProfileLogOut = styled.a `
    color: ${theme.colors.greyMedium};
    cursor: pointer;
    text-decoration: none;
`