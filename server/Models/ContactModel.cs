using Newtonsoft.Json;
using Server.Services;

namespace Server.Models
{

    public class ContactModel
    {
        MailService _mailService = new MailService();

        [JsonProperty("email")]
        public string? Email { get; set; }

        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("message")]
        public string? Message { get; set; }

        public async Task<bool> ForwardToEmail()
        {
            bool success = await _mailService.SendMail(Name, Email, Message);
            return success;
        }
    }
}