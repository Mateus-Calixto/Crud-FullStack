import React from "react";
import styled from "styled-components";
import axios from 'axios'

import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1820px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Aviso = styled.h3``;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media(max-width: 700px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    width: ${(props) => props.width ? props.width : "auto" };
    text-align: ${(props) => (props.alignCenter ? "center": "start")};
    

    @media (max-width: 700px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`


//parametros recebidos no app.js
const Grid = ({ users, setUsers, setOnEdit }) =>{


    const removerItem = async (id) =>{
        await axios
        await axios
        .delete("http://localhost:8800/" + id)
        .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
        })
        .catch(({ data }) => toast.error(data));

        setOnEdit(null)
    }


    const editarItem = (item) => {
        setOnEdit(item)
        
    }


    const NoDataMessage = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: #666;
    margin-top: 20px;
    `;


    if (users.length === 0) {
        return <NoDataMessage>Nenhum usuário encontrado.</NoDataMessage>
    }

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Fone</Th>
                    <Th onlyWeb>Data Nasc.</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((usuario, i) => (
                    <Tr key={i}>
                        <Td width="30%" >{usuario.nome}</Td>
                        <Td width="30%">{usuario.email}</Td>
                        <Td  width="20%" onlyWeb>{usuario.fone}</Td>
                        <Td  width="20%" onlyWeb>{new Date(usuario.data_nascimento).toLocaleDateString("pt-BR")}</Td>
                        <Td alignCenter width="5%">
                        <FaEdit cursor={"pointer"} onClick={() => editarItem(usuario)}/>
                        </Td>
                        <Td width="5%" alignCenter>
                        <FaTrash cursor={"pointer"} onClick={() => removerItem(usuario.id)}/>

                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )

}


export default Grid