//Include all the screenshot parameters in this configuration file
module.exports = { 
     urllist: ["https://www.lambdatest.com/list-of-browsers", "https://www.lambdatest.com/"],
     BrowserConfigurations: {
        "windows 10": {
          "chrome": [
            "76",
            "75"
          ],
          "edge": [
            "87"
          ],
          "ie": [
            "11"
          ]
        },
        "windows 8": {
          "ie": [
            "10"
          ]
        },
        "windows 7": {
          "ie": [
            "9",
            "8"
          ]
        },
      },
     defer_time: 3,
     email: false,
     layout: "portrait",
     mac_res: "1024x768",
     win_res: "1366X768",
     smart_scroll: true
};

