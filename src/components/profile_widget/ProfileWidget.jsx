import styled from 'styled-components';
import { theme } from '../../theme/Theme';
import { FaRegUserCircle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { userContext } from '../../store/UserContext';
import { useContext } from 'react';

function ProfileWidget() {

    // const navigate = useNavigate();
    // const location = useLocation();
    const [user] = useContext(userContext);

    // useEffect(() => {
    //     if(location.state.name === "") {
    //         navigate('/');
    //     }    
    // }, [location.state, navigate]);

    return (
        <ProfileDiv>
            <ProfileDetail>
                <ProfileText>Salut <span>{user}</span></ProfileText>
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
    position: relative;
    &::before {
        content: "";
        width: 100%;
        height: 2px;
        background: ${theme.colors.primary_cake};
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        transform-origin: left;
        transform: scale(0);
        transition: all linear 0.3s;
    }
    &:hover::before {
        transform: scale(1);
    }
`