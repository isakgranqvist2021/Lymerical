using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.Models;
using Server.Services;

namespace server.Controllers
{
    [Route("api/contact")]
    [ApiController]
    public class ContactController : ControllerBase
    {

        MailService _mailService = new MailService();

        [HttpPost]
        public async Task<ActionResult<string>> SendMail([FromBody] ContactModel mailData)
        {
            try
            {
                if (mailData == null)
                {
                    throw new System.Exception();
                }

                if (mailData.Name == null)
                {

                }

                await mailData.ForwardToEmail();

                return JsonConvert.SerializeObject(new ResponseModel
                {
                    Message = "Your message has been sent",
                    Success = true,
                    Data = null,
                });
            }
            catch (System.Exception)
            {
                return JsonConvert.SerializeObject(new ResponseModel
                {
                    Message = "An error has occured, please try again",
                    Success = false,
                    Data = null,
                });
            }
        }
    }
}