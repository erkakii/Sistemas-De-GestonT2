using _07_CRUD_Personas_DAL.Conexion;
using Entidades;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class clsListadosDAL
    {
        /// <summary>
        /// Este método vamos a establecer la conexión con la base de datos. Crearemos un lector con el que cogeremos los datos que nos interesan
        /// para poder ir creando personas la cuales introduciremos en una lista la cual devolveremos. Además controlaremos algunas excepciones.
        /// Precondición: Que la base de datos exista
        /// Postcondición: Ninguna
        /// </summary>
        /// <returns>List<clsPersona></returns>
        public static List<clsPersona> conseguirListadoPersonasDAL()
        {
            List<clsPersona> lista = new List<clsPersona>();
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = clsMyConnection.getConnection();
            clsPersona persona;

            SqlCommand miComando = new SqlCommand();
            SqlDataReader miLector;

            try
            {
                miComando.CommandText = "SELECT * FROM Personas";
                miComando.Connection = connection;
                miLector = miComando.ExecuteReader();
                if (miLector != null)
                {
                    while (miLector.Read())
                    {
                        persona = new clsPersona();
                        persona.id = (int)miLector["ID"];
                        persona.nombre = (string)miLector["Nombre"];
                        persona.apellidos = (string)miLector["Apellidos"];
                        if (miLector["Telefono"] != System.DBNull.Value)
                        {
                            persona.telefono = (string)miLector["Telefono"];
                        }
                        if (miLector["Direccion"] != System.DBNull.Value)
                        {
                            persona.direccion = (string)miLector["Direccion"];
                        }
                        if (miLector["Foto"] != System.DBNull.Value)
                        {
                            persona.foto = (string)miLector["Foto"];
                        }
                        if (miLector["FechaNacimiento"] != System.DBNull.Value)
                        {
                            persona.fechaNacimiento = (DateTime)miLector["FechaNacimiento"];
                        }
                        if (miLector["IDDepartamento"] != System.DBNull.Value)
                        {
                            persona.idDepartamento = (int)miLector["IDDepartamento"];
                        }
                        lista.Add(persona);
                    }
                    miLector.Close();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                clsMyConnection.closeConnection(ref connection);
            }
            return lista;
        }


        /// <summary>
        /// Este método vamos a establecer la conexión con la base de datos. Crearemos un lector con el que cogeremos los datos que nos interesan
        /// para poder ir creando departamentos los cuales introduciremos en una lista la cual devolveremos. Además controlaremos algunas excepciones.
        /// Precondición: Que la base de datos exista
        /// Postcondición: Ninguna
        /// </summary>
        /// <returns>List<clsDepartamentos></returns>
        public static List<clsDepartamentos> conseguirListadoDepartamentosDAL()
        {
            List<clsDepartamentos> lista = new List<clsDepartamentos>();
            clsMyConnection clsMyConnection = new clsMyConnection();
            SqlConnection connection = clsMyConnection.getConnection();
            clsDepartamentos departamento;

            SqlCommand miComando = new SqlCommand();
            SqlDataReader miLector;

            try
            {
                miComando.CommandText = "SELECT * FROM Departamentos";
                miComando.Connection = connection;
                miLector = miComando.ExecuteReader();
                if (miLector != null)
                {
                    while (miLector.Read())
                    {
                        departamento = new clsDepartamentos();
                        departamento.idDepartamento = (int)miLector["ID"];
                        departamento.nombre = (string)miLector["Nombre"];
                        lista.Add(departamento);
                    }
                    miLector.Close();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                clsMyConnection.closeConnection(ref connection);
            }
            return lista;
        }
    }
}
