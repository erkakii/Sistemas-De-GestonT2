using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class clsDepartamentos
    {
        #region Atributos
        int _idDepartamento;
        string _nombre;
        #endregion

        #region Propiedades
        public int idDepartamento
        {
            get { return _idDepartamento; }
            set { _idDepartamento = value; }
        }

        public string nombre
        {
            get { return _nombre; }
            set { _nombre = value; }
        }
        #endregion

        #region Constructores

        public clsDepartamentos(int idDepartamento, string nombre)
        {
            _idDepartamento = idDepartamento;
            _nombre = nombre;
        }

        public clsDepartamentos() { }
        #endregion
    }
}
