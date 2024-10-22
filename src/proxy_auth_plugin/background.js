
    var config = {
        mode: "fixed_servers",
        rules: {
            singleProxy: {
                scheme: "http",
                host: "45.130.126.204",
                port: parseInt(8000)
            },
            bypassList: ["localhost"]
        }
    };

    chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});

    chrome.webRequest.onAuthRequired.addListener(
        function(details, callback) {
            callback({
                authCredentials: {username: "tsDLZZ", password: "nsn4Ga"}
            });
        },
        {urls: ["<all_urls>"]},
        ["blocking"]
    );
    