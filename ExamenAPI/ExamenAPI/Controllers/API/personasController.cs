using BL;
using Entidades;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ExamenAPI.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class personasController : ControllerBase
    {
        // GET: api/<personasController>
        [HttpGet]
        public IEnumerable<clsPersona> Get()
        {
            List<clsPersona> listaPersonas = new List<clsPersona>();
            try
            {
                listaPersonas = clsManejadoraBL.listadoPersonasBL();
            }catch(Exception ex)
            {

            }

            return listaPersonas;
        }

      
        // PUT api/<personasController>/5
        [HttpPut]
        public void Put([FromBody] clsPersona value)
        {
            try
            {
                clsManejadoraBL.editarPersonaBL(value);

            }catch(Exception ex)
            {

            }
        }

       
    }
}
