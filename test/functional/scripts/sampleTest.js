module.exports = {
    'Sample functional test' : function (browser) {
      browser
        .url('https://cool-career.mybluemix.net')
        .waitForElementVisible('body', 1000, true,
        function(){}, 'Waiting for Search Input to become visible')
        .assert.visible('#mainNav > div > a')
        // .setValue('input.gsfi', 'Test')
        // .waitForElementPresent('#search-page', 60000)
        // .pause(5000)
        .end();
    }
  };