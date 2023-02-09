using DAL;
using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class clsManejadoraBL
    {
        /// <summary>
        /// Este método conseguría las personas de la abse de datos pero con el id del departamento
        /// Precondición: Ninguna
        /// PostCondición: Ninguna
        /// </summary>
        /// <returns>List<clsPerosnasConDepartamentos></returns>
        public static List<clsPersonaConDepartamento> listadoPersonasConDepartamentoBL()
        {
           return clsManejadoraDAL.listadoPersonasConDepartamentoDAL();
        }
    }
}
