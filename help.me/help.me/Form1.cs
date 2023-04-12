using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Http;
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
            

            var url = " https://api.helpme.targetbr.biz/api/usuarios";

            HttpClient client = new HttpClient();
            var response = client.GetAsync(url).Id;
            

            if (response.IsSuccessStatusCode)
             {


                MessageBox.Show("Cadastro realizado com sucesso!!");
            }
           
            
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }
    }

}