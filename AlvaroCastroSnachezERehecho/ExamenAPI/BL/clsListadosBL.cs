using DAL;
using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class clsListadosBL
    {
        /// <summary>
        /// Este método conseguría las personas de la abse de datos pero con el id del departamento
        /// Precondición: Ninguna
        /// PostCondición: Ninguna
        /// </summary>
        /// <returns>List<clsPerosnasConDepartamentos></returns>
        public static List<clsPersona> listadoPersonasBL()
        {
            return clsListadosDAL.conseguirListadoPersonasDAL();
        }

        /// <summary>
        /// Devuelve un listado de departamentos de la base de datos 
        /// Precondición: Ninguna
        /// PostCondición: Ninguna
        /// </summary>
        /// <returns>List<clsDepartamentos></returns>
        public static List<clsDepartamentos> departamentosBL()
        {
            return clsListadosDAL.conseguirListadoDepartamentosDAL();
        }
    }
}
