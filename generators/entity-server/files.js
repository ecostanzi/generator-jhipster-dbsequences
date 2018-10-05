const constants = require('generator-jhipster/generators/generator-constants');
const SERVER_MAIN_SRC_CUSTOM_DIR = `${constants.MAIN_DIR}java/`;

const customFiles = {
    server: [
        {
            path: SERVER_MAIN_SRC_CUSTOM_DIR,
            templates: [
                {
                    file: 'package/domain/Entity.java',
                    renameTo: generator => `${generator.packageFolder}/domain/${generator.entityClass}.java`
                }
            ]
        }
    ]
};

module.exports = {
    writeFiles
};

function writeFiles() {
    return {
        writeServerFilee() {
            if (this.skipServer) return;
            console.log("Overriding new entity picked up from template in " + SERVER_MAIN_SRC_CUSTOM_DIR)

            // write server side files
            this.writeFilesToDisk(customFiles, this, false);

        }
    };
}