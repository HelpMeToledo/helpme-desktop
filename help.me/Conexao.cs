using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.Design.Serialization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace help.me
{
   static class Conexao 
              {
        private const string servidor = "localhost";
        private const string bancoDados = "helpme";
        private const string usuario = "root";
        private const string senha = "1234";

       static public string bancoServidor = $"server={servidor};  user id = {usuario}; database={bancoDados};password= {senha}";

    }
           
           
}













        
     



   

