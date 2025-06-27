const Certificate = artifacts.require("Certificate");

module.exports = async function (deployer, network, accounts) {
    // use the first unlocked account as the initial authority;
    // you can hard-code or pull this from config/env as needed
    const initialAuthority = accounts[0];

    await deployer.deploy(Certificate, initialAuthority);
    console.log(
        `Certificate deployed at ${Certificate.address} with authority ${initialAuthority}`
    );
};