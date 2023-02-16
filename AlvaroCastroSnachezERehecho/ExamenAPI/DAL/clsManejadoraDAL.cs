using _07_CRUD_Personas_DAL.Conexion;
using Entidades;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class clsManejadoraDAL
    {
        

       

        /// <summary>
        /// En este método vamos a editar los valores de una persona en nuestra base de datos. Abriremos la conexión y haremos una update en nuestra tabla con los datos nuevos
        /// que proporcionamos con la persona nueva introducida por parámetros. Actualizaremos cada uno de sus campos y cerraremos la conexión
        /// Precondición: Que la persona ya exista en la base de datos
        /// PostCondición: Ninguna
        /// </summary>
        /// <param name="persona">La perosna nueva la cual va ha reemplazar a la ya existente en la base de datos</param>
        public static void EditarPersonaDAL(clsPersona persona)
        {
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection conexion = clsMyConnection.getConnection();
            SqlCommand miComando = new SqlCommand();

            try
            {
                miComando.CommandText = $"UPDATE Personas" +
                    $" SET Nombre = @nombre, Apellidos = @apellidos, Telefono = @telefono,  Direccion = @direccion, Foto = @foto, FechaNacimiento=@fechaNacimiento, IDDepartamento = @idDepartamento " +
                    $"WHERE ID = {persona.id}";

                miComando.Parameters.AddWithValue("@nombre", persona.nombre);
                miComando.Parameters.AddWithValue("@apellidos", persona.apellidos);
                miComando.Parameters.AddWithValue("@telefono", persona.telefono);
                miComando.Parameters.AddWithValue("@direccion", persona.direccion);
                miComando.Parameters.AddWithValue("@foto", persona.foto);
                miComando.Parameters.AddWithValue("@fechaNacimiento", persona.fechaNacimiento);
                miComando.Parameters.AddWithValue("@idDepartamento", persona.idDepartamento); ;
                miComando.Connection = conexion;
                miComando.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                clsMyConnection.closeConnection(ref conexion);
            }
        }
    }


   
}

