using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class clsPersonaConDepartamento
    {
        #region Atributos
        clsPersona _persona;
        clsDepartamentos _departamento;
        #endregion

        #region Propiedades

        public clsPersona persona
        {
            get { return _persona; }
            set { _persona = value; }
        }

        public clsDepartamentos departamento
        {
            get { return _departamento; }
            set { _departamento = value; }
        }
        #endregion

        #region Constructores

        public clsPersonaConDepartamento(clsPersona persona, clsDepartamentos departamentos)
        {
            this.persona = persona;
            this.departamento = departamentos;
        }

        public clsPersonaConDepartamento() { }
        #endregion
    }
}
