using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace help.me
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        private void button1_Click(object sender, EventArgs e)
        {
            try
            {

                if (!txtNome.Text.Equals("") && !txtEMAIL.Text.Equals("") && !txtCPF.Text.Equals("") && !txtSENHA.Text.Equals("") && 
                    !txtTELEFONE.Text.Equals("")) 
                {
                    Cadastrar cadasusuario= new Cadastrar();
                    cadasusuario.NOME = txtNome.Text;    
                    cadasusuario.EMAIL = txtEMAIL.Text;  
                    cadasusuario.CPF = txtCPF.Text;
                    cadasusuario.SENHA = txtSENHA.Text;  
                    cadasusuario.TELEFONE = txtTELEFONE.Text;

                    if (cadasusuario.cadastrarusuario())
                    {
                        MessageBox.Show($"O usuario  {cadasusuario.NOME} foi cadastrado com sucesso!! ");
                    }

                    else
                    {
                        MessageBox.Show("Não foi possivel cadastarar o usuario!");
                    }

                }

                else
                {
                    MessageBox.Show("Preencher todos os campos corretamente!");
                    txtNome.Clear();
                    txtEMAIL.Clear();   
                    txtCPF.Clear(); 
                    txtSENHA.Clear();   
                    txtTELEFONE.Clear();  
                    txtNome.Focus();
                }



            }
            catch (Exception ex )
            {

                MessageBox.Show("erro ao cadastrar usuario" + ex.Message);
            }

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
        
}
