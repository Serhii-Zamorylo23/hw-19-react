import styled from "styled-components";
import {useCallback, useMemo} from "react";
const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style: none;
`;
const Button=styled.button`
  transition-duration: 0.3s;
  margin-left: 10px;
  &:hover{
    transition-duration: 0.5s;
    background: #a02c2c;
    color: white;
    border: none;
  }
`
const Contacts = ({ deleteContact, userInfo }) => {
    const handleDelete = useCallback((id) => {
        deleteContact(id);
        },
        [deleteContact]
    );
    const renderedUsers = useMemo(() => {
        return userInfo.map((user) => (
            <li key={user.id}>
                {user.name} : {user.telephone}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
        ));
    }, [userInfo, handleDelete]);

    return <ul>{renderedUsers}</ul>;
};

export default Contacts;