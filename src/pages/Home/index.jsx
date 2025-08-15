import { useEffect, useState, useRef } from 'react'
import './style.css'
import Lixeira from '../../assets/img/lixeira.png'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  const inputNome = useRef()
  const inputEmail = useRef()
  const inputSenha = useRef()

  // Função para buscar os usuários da API
  async function getUsers() {
    try {
      const usersFromApi = await api.get('/usuarios')
      setUsers(usersFromApi.data)
    } catch (error) {
      console.error("Erro ao buscar usuários:", error)
    }
  }

    async function deletUsers(id) {
      await api.delete(`/usuarios/${id}`)
      getUsers()
  }

  // Função para criar um novo usuário
  async function createUsers() {
    try {
      await api.post('/usuarios', {
        name: inputNome.current.value,
        email: inputEmail.current.value,
        senha: inputSenha.current.value
      })
     
      await getUsers()
      
      
      inputNome.current.value,
      inputEmail.current.value,
      inputSenha.current.value 
      
    } catch (error) {
      
      console.error("Erro ao criar usuário:", error)
      alert("Erro ao cadastrar usuário! Verifique se os campos estão preenchidos corretamente.")
    }
  }

  // UseEffect para carregar os usuários na inicialização do componente
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form className='fomrulario'>
        <h1>CADASTRO</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputNome} />
       <input placeholder="E-mail" name="email" type="string" ref={inputEmail} />
        <input placeholder="Senha" name="senha" type="password" ref={inputSenha} />
        <button type="button" onClick={createUsers}>CADASTRAR</button>
      </form>

      {users.length > 0 ? (
        users.map(user => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome:{user.name}</p>
              <p>Email:{user.email}</p>
            </div>
            <div>
              <button id='delet' onClick={() =>deletUsers(user.id)}><img src={Lixeira} alt="Deletar" /></button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum usuário cadastrado.</p>
      )}
    </div>
  )
}

export default Home