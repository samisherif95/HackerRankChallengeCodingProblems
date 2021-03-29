function deviceNamesSystem(devicenames) {
    const deviceNum = {}; //{switch:3, tv:2}

    for (let i = 0; i < devicenames.length; i++) {
        const devName = devicenames[i];

        if (!deviceNum[devName]) {
            deviceNum[devName] = 1;
        } else {
            devicenames[i] += deviceNum[devName];
            deviceNum[devName] += 1;
        }
    }

    return devicenames;
}
