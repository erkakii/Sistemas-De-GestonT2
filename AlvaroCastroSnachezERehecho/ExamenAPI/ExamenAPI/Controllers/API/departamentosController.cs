using BL;
using Entidades;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ExamenAPI.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class departamentosController : ControllerBase
    {
        // GET: api/<departamentosController>
        [HttpGet]
        public IEnumerable<clsDepartamentos> Get()
        {
            List<clsDepartamentos> listaDepartamentos = new List<clsDepartamentos>();
            try
            {
                listaDepartamentos = clsListadosBL.departamentosBL();
            }catch(Exception ex)
            {

            }

            return listaDepartamentos;
        }

        
    }
}
