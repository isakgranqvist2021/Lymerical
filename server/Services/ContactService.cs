using SendGrid;
using SendGrid.Helpers.Mail;

namespace Server.Services
{

    public class MailService
    {
        public async Task<bool> SendMail(string? Name, string? Email, string? Message)
        {
            try
            {
                var apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY");

                var client = new SendGridClient(apiKey);

                var from = new EmailAddress("contact@isakgranqvist.com", "isakgranqvist.com");

                var subject = "Forwarded - isakgranqvist.com";

                var to = new EmailAddress("isakwebdev@gmail.com");

                FormattableString mail = $"<div><h2>{Name} - {Email}<h2></div><div><p>{Message}</p></div>";

                var msg = MailHelper.CreateSingleEmail(from, to, subject, mail.ToString(), mail.ToString());

                var response = await client.SendEmailAsync(msg);

                return true;
            }
            catch (System.Exception)
            {
                return false;
            }
        }
    }
}