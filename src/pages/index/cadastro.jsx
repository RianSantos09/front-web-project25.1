import { useEffect, useState, useRef } from 'react'
import Lixeira from '../../assets/img/lixeira.png'
import api from '../../services/api'
import '../index/style.css'

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
    try {
      await api.delete(`/usuarios/${id}`)
      // ✅ Atualiza a lista após a exclusão
      getUsers() 
    } catch (error) {
      console.error("Erro ao deletar usuário:", error)
    }
  }

  async function createUsers() {
    try {
      await api.post('/usuarios', {
        name: inputNome.current.value,
        email: inputEmail.current.value,
        senha: inputSenha.current.value,

        // ✅ NOVOS CAMPOS COM VALORES PADRÃO
        nivelDeAcesso: 1, 
        permissoes: "xd",
        descricao: "dx"
      })
      
      // ✅ Atualiza a lista após o cadastro
      getUsers()
      
     
      inputNome.current.value = ''
      inputEmail.current.value = ''
      inputSenha.current.value = ''
      
      
    } catch (error) {
      console.error("Erro ao criar usuário:", error)
      alert("Erro ao cadastrar usuário! Verifique se os campos estão preenchidos corretamente.")
    }
  }

  

  // ✅ ATUALIZAÇÃO: O useEffect agora recarrega a lista apenas no primeiro carregamento
  useEffect(() => {
    getUsers()
  }, []) 

  return (
    <div className="body-container "> 
    <div className='container-form'>
      <form className='fomrulario'>
        <h1>CADASTRO</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputNome}/>
        <input placeholder="E-mail" name="email" type="email" ref={inputEmail}/>
        <input placeholder="Senha" name="senha" type="password" ref={inputSenha}/>
        <button type="button-cad" onClick={createUsers}>CADASTRAR</button>
      </form>

      {users.length > 0 ? (
        users.map(user => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome:{user.name}</p>
              <p>Email:{user.email}</p>
              <p>Senha:{user.senha}</p>
            </div>
            <div>
              <button id='delet' onClick={() => deletUsers(user.id)}><img src={Lixeira} alt="Deletar" /></button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum usuário cadastrado.</p>
      )}
    </div>
    </div>
  )
}

export default Home