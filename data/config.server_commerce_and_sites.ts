
commerce: {
    sites: [
        {
            id: "MarketStreet",
            defaultLocale: "en-US",
            defaultCurrency: "USD",
            supportedLocales: [
                {
                    id: "en-US",
                    preferredCurrency: "USD",
                },
                {
                    id: "en-GB",
                    preferredCurrency: "GBP",
                },
                {
                    id: "fr-FR",
                    preferredCurrency: "EUR",
                },
                {
                    id: "it-IT",
                    preferredCurrency: "EUR",
                },
                {
                    id: "ja-JP",
                    preferredCurrency: "JPY",
                },
                // Other sites...
            ],
            supportedCurrencies: ["USD", "EUR", "GBP", "JPY"],
        },
    ],
},
defaultSiteId: "MarketStreet",
siteAliasMap: {
    MarketStreet: "us",
    MarketStreet: "global",
},