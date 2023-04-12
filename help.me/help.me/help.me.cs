using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace help.me
{
    namespace QuickType
    {
        using System;
        using System.Collections.Generic;

        using System.Globalization;
        using Newtonsoft.Json;
        using Newtonsoft.Json.Converters;

        public partial class HelpMe
        {
            [JsonProperty("status")]
            public bool Status { get; set; }

            [JsonProperty("data")]
            public Datum[] Data { get; set; }
        }

        public partial class Datum
        {
            [JsonProperty("id")]
            public long Id { get; set; }

            [JsonProperty("nome")]
            public string Nome { get; set; }

            [JsonProperty("cpf")]
            public string Cpf { get; set; }

            [JsonProperty("email")]
            public string Email { get; set; }

            [JsonProperty("senha")]
            public string Senha { get; set; }

            [JsonProperty("telefone")]
            public string Telefone { get; set; }

            [JsonProperty("ativo")]
            public long Ativo { get; set; }

            [JsonProperty("created_at")]
            public DateTimeOffset CreatedAt { get; set; }

            [JsonProperty("updated_at")]
            public DateTimeOffset UpdatedAt { get; set; }
        }

        public partial class HelpMe
        {
            public static HelpMe FromJson(string json) => JsonConvert.DeserializeObject<HelpMe>(json, QuickType.Converter.Settings);
        }

        public static class Serialize
        {
            public static string ToJson(this HelpMe self) => JsonConvert.SerializeObject(self, QuickType.Converter.Settings);
        }

        internal static class Converter
        {
            public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
            {
                MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
                DateParseHandling = DateParseHandling.None,
                Converters =
            {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
            };



        }
    }
}
