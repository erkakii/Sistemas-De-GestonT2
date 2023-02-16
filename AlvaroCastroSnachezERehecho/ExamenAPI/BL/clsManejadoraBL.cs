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
        /// Actualiza una persona de la base de datos
        /// Precondición: Ninguna
        /// PostCondición: Ninguna
        /// </summary>
        /// <param name="persona">clsPersona</param>
        public static void editarPersonaBL(clsPersona persona)
        {
            clsManejadoraDAL.EditarPersonaDAL(persona);
        }
    }
}
