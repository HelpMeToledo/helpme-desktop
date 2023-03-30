using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace help.me
{
    internal class Cadastrar
    {
        private int id;  
        private string  Nome;
        private string Cpf;
        private string Email;
        private string Senha;
        private string Telefone;



        public int Id
        {
             get { return id; }
            set { id = value; } 
        }

        public string NOME
        {
            get { return Nome; }
            set { Nome = value; }

        }

        public string CPF
        {
            get { return Cpf; }
            set {  Cpf = value; } 
        
        }   

        public string EMAIL
        {
            get { return Email; }
            set { Email = value;}
        }

        public string SENHA
        { get { return Senha; }
            set
            {Senha = value; }
        }

        public string TELEFONE
        { 
            get { return Telefone; }
            set { Telefone = value; } 
        }


        public bool cadastrarusuario ()
        {

            try
            {
                MySqlConnection mySqlConexao = new MySqlConnection(Conexao.bancoServidor);
                mySqlConexao.Open ();

                string insert = $"insert into usuario (nome, cpf, email, senha , telefone ) values ('{Nome}','{Cpf}','{Email}','{Senha}','{Telefone}')";
                MySqlCommand comandosql = mySqlConexao.CreateCommand ();
                comandosql.CommandText = insert;

                comandosql.ExecuteNonQuery ();
                return true;    
            }
            catch (Exception ex)
            {

                MessageBox.Show("ERRO AO CADASTRAR USUARIO" + ex.Message);
                return false;

            }

        }

    }
}
