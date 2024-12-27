namespace SimpleShopper.Server
{
    public class JwtSettings
    {
        public string Secret { get; set; }

        public int ExpiresInMinutes { get; set; }
    }
}
