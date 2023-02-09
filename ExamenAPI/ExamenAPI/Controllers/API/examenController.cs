using BL;
using Entidades;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ExamenAPI.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class examenController : ControllerBase
    {
        // GET: api/<examenController>
        [HttpGet]
        public List<clsPersonaConDepartamento> Get()
        {
            return clsManejadoraBL.listadoPersonasConDepartamentoBL();
        }

        // PUT api/<examenController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] clsPersona value)
        {
        }

        
    }
}
