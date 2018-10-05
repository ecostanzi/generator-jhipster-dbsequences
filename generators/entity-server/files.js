const constants = require('generator-jhipster/generators/generator-constants');

const SERVER_MAIN_SRC_CUSTOM_DIR = `${constants.MAIN_DIR}custom/`;

const serverFiles = {
    customserver: [
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

        writeServerFiles() {
            if (this.skipServer) return;

            // write server side files
            this.writeFilesToDisk(serverFiles, this, false);

        }
    };
}